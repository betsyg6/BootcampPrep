// typeof object
console.log(typeof {})

const betsyInfo = {
  name: 'Betsy',
  pet: 'Koda'
}

console.log(typeof betsyInfo)

// accessing values
console.log(betsyInfo.pet) // dot notation
console.log(betsyInfo['name']) // bracket notation

// adding values
betsyInfo.location = 'New Hampshire'
console.log(betsyInfo)

// changing values
betsyInfo.location = 'New Hampshire, USA'
console.log(betsyInfo)

betsyInfo.luckyNumber = 6
console.log(betsyInfo)
betsyInfo.luckyNumber++
console.log(betsyInfo)

// deleting values
delete betsyInfo.location
console.log(betsyInfo)

// in operator (check if a key exists in the object)
console.log('location' in betsyInfo)
console.log('name' in betsyInfo)

// for...in loop (loop through keys in an object)
for (let key in betsyInfo) {
  console.log('key:', key, typeof key)
  // keys are strings, need to use bracket notation - not dot - for access
  console.log('value:', betsyInfo[key])
}

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(betsyInfo)) // returns an array of the keys
console.log(Object.values(betsyInfo)) // returns an array of the values
console.log(Object.entries(betsyInfo)) // returns an array of arrays representing [key, value]

// nested arrays
betsyInfo.favoriteSports = ['running', 'skiing']
console.log(betsyInfo.favoriteSports[0])

// nested objects
betsyInfo.pet = {
  name: 'Koda',
  type: 'Dog',
  yearsOld: '6.5'
}

console.log(betsyInfo.pet.name)

// creating "dictionaries"
// write a function that takes an array of pizza types and returns the type that appears most frequently
// ['pepperoni', 'meatball', 'pepperoni', 'cheese', 'meatball', 'meatball', 'meatball']
function findMostFreqPizza (array) {
  let pizzaCounter = {}

  for (let i = 0; i < array.length; i++) {
    let curr = array[i]

    if (curr in pizzaCounter) {
      pizzaCounter[curr]++
    } else {
      pizzaCounter[curr] = 1
    }
  }

  let highestCount = 0
  let highestPizza = ''

  for (let key in pizzaCounter) {
    if (pizzaCounter[key] > highestCount) {
      highestCount = pizzaCounter[key]
      highestPizza = key
    }
  }

  return highestPizza
}

findMostFreqPizza(['pepperoni', 'meatball', 'pepperoni', 'cheese', 'meatball', 'meatball', 'meatball'])