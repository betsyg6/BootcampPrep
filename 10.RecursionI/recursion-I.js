// recursion = when a function calls itself!
// alternative to iterating with loops
// JS only runs one function at a time
// call stack helps figure out what should happen & when

function first () {
  console.log("me first!")
}

function second () {
  console.log("me second!")
}

// first program runs and finishes
first()
// second program runs and finishes
second()

//----------------------------
// recursion has 2 parts:
// 1. base case - when should the function STOP? usually the simplest input and output!
// 2. recursive case - when should the function call itself again using a different input (otherwise we'll be stuck in an infinite loop)

// *returning from recursive calls:
// test that the base case works before working with recursive case
// -----------------------------

// write a function that returns the sum of a sequence of integers. the sequence is defined by 3 non negative values - start, end, step (inclusive). if the start value is greater than the end, return 0.
// sumSequence(2, 2, 2) > return 2
// sumSequence(4, 8, 2) > return 18 (4 + 6 + 8)
// sumSequence(1, 5, 1) > return 15 (1 + 2 + 3 + 4 + 5)

// iteratively:
function sumSequence (start, end, step) {
  let sum = 0
  for (let i = start; i <= end; i += step) {
    sum += i
  }
  return sum
}

// recursively:
function sumSequence (start, end, step) {
  if (start > end) {
    return 0
  }
  return start + sumSequence(start + step, end, step)
}

sumSequence(4, 8, 2)
