const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if(strokes == 1 ){
 return names[0];
}else if(strokes<= par - 2){
  return names[1];
}else if(strokes == par - 1){
  return names[2];
}else if(strokes == par ){
  return names[3];
}else if(strokes == par + 1 ){
  return names[4];
}else if(strokes == par + 2 ){
  return names[5];
}else if(strokes >= par + 3	 ){
  return names[6];
}else{
return "Change Me";}
  // Only change code above this line
}

golfScore(5, 4);

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val){
   case 1:
   answer = "alpha";
   break;
   case 2:
   answer ="beta";
   break;
   case 3:
   answer ="gamma";
   break;
   case 4:
   answer ="delta";
  }
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);


  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
    answer= "Low";
    break;
    case 4:
    case 5:
    case 6:
    answer= "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer= "High";
    break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
  case 1:
   answer = "There is no #1";
   break;
   case 7:
   answer = "Ate Nine";
   break;
   case 42:
   answer = "The Answer";
   break;
   case 99:
   answer = "Missed me by this much!";
   break;
   case "bob":
    answer = "Marley";
    break;
    default:
    answer = "";
  }
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);

  function isLess(a, b) {
    // Only change code below this line
    return (a < b);
  
    // Only change code above this line
  }
  
  isLess(10, 15);

function abTest(a, b) {
    // Only change code below this line
  if (a <0 || b <0 )
   return undefined;
  
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);