// splice - splice(start, deleteCount, item1)
const days = ['Monday', 'Wednesday', 'Thursday', 'Saturday'];
days.splice(1, 0, 'Tuesday');
// inserts at index 1
console.log(days);

days.splice(4, 1, 'Friday');
// replaces 1 element at index 4
console.log(days);

// join - join(delimiter)
const alphabet = ['a', 'b', 'c', 'd']
const abcs = alphabet.join('')
console.log(alphabet)
console.log(abcs)

// concat
const begOfWeek = ['Monday', 'Tuesday', 'Wednesday']
const endOfWeek = ['Thursday', 'Friday', 'Saturday', 'Sunday']

const fullWeek = begOfWeek.concat(endOfWeek)
const jumbledWeek = endOfWeek.concat(begOfWeek)
console.log(begOfWeek)
console.log(endOfWeek)
console.log(fullWeek)
console.log(jumbledWeek)

// nested arrays
const puppyGroups = [
  ['princess', 'fluffy'], 
  ['muffin', 'shadow'], 
  ['cody', 'coco']]

  for (let i = 0; i < puppyGroups.length; i++) {
    let currArray = puppyGroups[i]
    for (let j = 0; j < currArray.length; j++) {
      let puppy = currArray[j]
      console.log(puppy)
    }
  }

  // grids
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let center = grid[1][1]
console.log(center)