import { describe, expect, test } from "vitest"
import { generateFibonacciSequence } from "./fibonacci-sequence-generator"

describe("generateFibonacciSequence()", () => {
  test("throws error for Fibonacci sequence length less than 1", () => {
    expect(() => generateFibonacciSequence(0)).toThrowError(
      /^Fibonacci sequence length cannot be lower than 1$/
    )
  })

  test("returns given length of Fibonacci sequence", () => {
    expect(generateFibonacciSequence(5)).toStrictEqual([0, 1, 1, 2, 3])
    expect(generateFibonacciSequence(10)).toStrictEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
    ])
  })
})
