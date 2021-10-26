// global

let dogCount = 0;

function countDogs() {
  dogCount++;
  console.log(dogCount);
}

countDogs();

//-----reassign global variables

let word = 'hello';

function changeWord() {
  word = 'howdy';
  console.log(word);
}

console.log(word);
changeWord();
console.log(word);

// functional

function makeBurger() {
  let burgerMessage = '';

  burgerMessage += 'cheese';

  burgerMessage += ', buns';

  burgerMessage += ', burger';

  console.log('inside:', burgerMessage);
}

makeBurger();
console.log('outside:', burgerMessage);

// -----nested functions
function makeBurger() {
  let burgerMessage = '';

  function addCheese() {
    burgerMessage += 'cheese';
  }

  addCheese();
  console.log(burgerMessage);
}

makeBurger();

// --variables n stuff

let str = 'string';

function makeBurger(str) {
  let burgerMessage = str;

  function addCheese() {
    burgerMessage += 'cheese';
  }

  addCheese();
  console.log(burgerMessage);
}

makeBurger('buger');

// block
function block(string) {
  let blockString = 'hello';
  if (string.length === 3) {
    blockString += string;
  }
  console.log(blockString);
}

block('hey');
block('hola');

// ----- only access within block

function block(string) {
  if (string.length === 3) {
    let blockString = 'block';
    blockString += string;
  }
  console.log(blockString);
}

block('hey');
block('hola');