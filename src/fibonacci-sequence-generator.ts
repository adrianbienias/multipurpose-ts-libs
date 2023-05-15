/**
 * Fibonacci sequence generator
 *
 * Works with a limited precession (Number.MAX_SAFE_INTEGER ~ 9007199254740991).
 * For bigger numbers, consider using BigInt().
 *
 * @author Adrian Bienias <adrian@bienias.dev>
 * @see https://github.com/adrianbienias/multipurpose-ts-libs
 * @license MIT
 */
export function generateFibonacciSequence(length: number) {
  if (length < 1) {
    throw new Error("Fibonacci sequence length cannot be lower than 1")
  }

  const fibonacci = fibonacciGenerator()
  const sequence: number[] = []
  let i = 0
  while (i++ < length) {
    const nextCall = fibonacci.next()
    if (!nextCall.done) {
      sequence.push(nextCall.value)
    }
  }

  return sequence
}

function* fibonacciGenerator() {
  let first = 0
  let second = 1

  while (true) {
    let third = first
    yield third

    third = first + second
    first = second
    second = third
  }
}
