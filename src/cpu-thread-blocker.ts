/**
 * CPU thread blocker
 *
 * Blocks CPU thread by running a synchronous loop
 * until the difference between two points in time is lower than the delay.
 *
 * @author Adrian Bienias <adrian@bienias.dev>
 * @see https://github.com/adrianbienias/multipurpose-ts-libs
 * @license MIT
 */
export function blockCPUThread(delayMs: number) {
  console.time("Blocking CPU thread")

  const startingMs = performance.now()
  while (performance.now() - startingMs < delayMs) {
    // Just iterate the loop doing nothing...
  }

  console.timeEnd("Blocking CPU thread")

  return "Dummy value"
}
