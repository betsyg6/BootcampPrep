// ---------------WHILE LOOPS

function eatPizza() {
  // initializer
  let numOfPizzaSlices = 1;

  // condition/expression -- while this thing is true, do what is inside code block
  while (numOfPizzaSlices <= 8) {
    console.log('EAT ' + numOfPizzaSlices + ' slice');
    // what changes as the loop executes
    numOfPizzaSlices++;
  }

  console.log('Pie is done');
}

// invoking function
eatPizza();

// -----------------FOR LOOPS
function writeLetters() {
  // for loop
  for (let i = 0; i < 10; i++) {
    console.log('wrote ' + i + ' letters');
  }

  console.log('done!');
}

writeLetters();

// FOR LOOP THROUGH STRING

function loopABC(string) {
  // initializer -- condition -- incrementer/changer
  for (let i = 0; i < string.length; i++) {
    console.log('i: ', i);
    console.log('letter: ', string[i]);
  }

  console.log('done!');
}

loopABC('hello');

// ---------DEBUGGING

function sum(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    debugger;
    if (i === 4) {
      continue;
    } else {
      sum += i;
    }
  }
  return sum;
}

sum(6);
