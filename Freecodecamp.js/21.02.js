const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift()

const myArray2 = [["John", 23], ["dog", 3]];
myArray.shift();


myArray.unshift(["Paul", 35]);

const myList =[["T-shirt", 15], ["Dart", 12], ["long", 8],
["long", 5],["long", 0]];

function reusableFunction() {
    console.log("Hi World");
   }
   reusableFunction();
function functionWithArgs(a, b){
    console.log(a+b);
}
functionWithArgs(1, 1);

function timesFive(number){
    return number*5; 
   }
   timesFive(5);

   const myGlobal=10;

function fun1() {
 oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

