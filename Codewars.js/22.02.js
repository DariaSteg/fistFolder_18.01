function simpleMultiplication(number) {
    if(number%2 == 0){
     return number*8;}
      else{
       return number*9
     }
    }
simpleMultiplication();

function repeatStr (n, s) {
  let count='';
  for(let i=0; i<n ;i++){
     count+=s;
  }
return count;
}