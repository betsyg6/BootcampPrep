function getRow(puzzle, row) {
  return puzzle[row];
}

function getColumn(puzzle, col) {
  let colArr = [];

  for (let i = 0; i < puzzle.length; i++) {
    colArr.push(puzzle[i][col]);
  }

  return colArr;
}

function getSection(puzzle, x, y) {
  // multiply by 3 to find the starting position for x and y in the for loops
  x *= 3;
  y *= 3;

  let section = [];

  for (let i = y; i < y + 3; i++) {
    for (let j = x; j < x + 3; j++) {
      section.push(puzzle[i][j]);
    }
  }

  return section;
}

function includes1to9(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (arr.indexOf(i) === -1) {
      return false;
    }
  }

  return true;
}

function sudokuIsValid(puzzle) {
  let checks = [];

  // nine rows and nine columns
  for(let i = 0; i < 9; i++) {
    checks.push(getRow(puzzle, i));
    checks.push(getColumn(puzzle, i));
  }

  // 3 sections for x and y
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      checks.push(getSection(puzzle, i, j));
    }
  }

  // loop through all the checks arrays and see if they include 1 to 9
  for(let i = 0; i < checks.length; i++) {
    if(!includes1to9(checks[i])) { 
      return false; 
    }
  }

  // if nothing has been returned, the checks were successful and return true
  return true;
}

// BONUS
function isSame(puzzle1, puzzle2) {
  // looping through the outer and inner arrays
  for (let i = 0; i < puzzle1.length; i++) {
    for (let j = 0; j < puzzle1[i].length; j++) {
      // comparing the same coordinates in each puzzle
      if (puzzle1[i][j] !== puzzle2[i][j]) {
        return false
      }
    }
  }
  // if nothing has been returned, they must match, return true
  return true
}

//-------------------------
// invalid, should return false
console.log(sudokuIsValid([[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]]))

// valid, should return true
console.log(sudokuIsValid([
  [ 8, 9, 5,   7, 4, 2,   1, 3, 6],
  [ 2, 7, 1,   9, 6, 3,   4, 8, 5],
  [ 4, 6, 3,   5, 8, 1,   7, 9, 2],
  
  [ 9, 3, 4,   6, 1, 7,   2, 5, 8],
  [ 5, 1, 7,   2, 3, 8,   9, 6, 4],
  [ 6, 8, 2,   4, 5, 9,   3, 7, 1],

  [ 1, 5, 9,   8, 7, 4,   6, 2, 3],
  [ 7, 4, 6,   3, 2, 5,   8, 1, 9],
  [ 3, 2, 8,   1, 9, 6,   5, 4, 7]
]
))

const invalidPuzzle = [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]]
const validPuzzle = [
  [ 8, 9, 5,   7, 4, 2,   1, 3, 6],
  [ 2, 7, 1,   9, 6, 3,   4, 8, 5],
  [ 4, 6, 3,   5, 8, 1,   7, 9, 2],
  
  [ 9, 3, 4,   6, 1, 7,   2, 5, 8],
  [ 5, 1, 7,   2, 3, 8,   9, 6, 4],
  [ 6, 8, 2,   4, 5, 9,   3, 7, 1],

  [ 1, 5, 9,   8, 7, 4,   6, 2, 3],
  [ 7, 4, 6,   3, 2, 5,   8, 1, 9],
  [ 3, 2, 8,   1, 9, 6,   5, 4, 7]
]

// should return false, the puzzles don't match
console.log(isSame(validPuzzle, invalidPuzzle))
// should return true, comparing the same puzzles
console.log(isSame(validPuzzle, validPuzzle))