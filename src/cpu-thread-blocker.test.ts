import { describe, expect, test, vi } from "vitest"
import { blockCPUThread } from "./cpu-thread-blocker"

describe("blockCPUThread()", () => {
  test("waits for a given delay", () => {
    // Manual copy/restore needed due to https://github.com/vitest-dev/vitest/issues/3127
    const consoleCopy = {
      time: console.time,
      timeEnd: console.timeEnd,
    }

    vi.spyOn(console, "time").mockImplementationOnce(vi.fn)
    vi.spyOn(console, "timeEnd").mockImplementationOnce(vi.fn)

    const delayMs = 250
    const startTime = performance.now()
    const blockedCPUthread = blockCPUThread(delayMs)
    const endTime = performance.now()

    expect(blockedCPUthread).toStrictEqual("Dummy value")

    const thresholdMs = 5
    expect(endTime - startTime).toBeGreaterThanOrEqual(delayMs - thresholdMs)
    expect(endTime - startTime).toBeLessThanOrEqual(delayMs + thresholdMs)

    expect(console.time).toBeCalledWith("Blocking CPU thread")
    expect(console.timeEnd).toBeCalledWith("Blocking CPU thread")

    console.time = consoleCopy.time
    console.timeEnd = consoleCopy.timeEnd
  })
})
