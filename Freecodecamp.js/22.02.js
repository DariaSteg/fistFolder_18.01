function myLocalScope() {
    const myVar=9;
  
    console.log('inside myLocalScope', myVar);
  }
  
  myLocalScope();
  console.log('outside myLocalScope', myVar);
  

  const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();

let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  
  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans() {
  // Only change code below this line

  return true; }

  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if(wasThatTrue){
   return "Yes, that was true";
  }
   return "No, that was false";}

   function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
 
  function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

  function compareEquality(a, b) {
    if (typeof a === typeof b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

  function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);