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