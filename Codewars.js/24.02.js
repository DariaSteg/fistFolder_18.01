function chromosomeCheck(sperm) {
    if(sperm.indexOf('Y')>0){
    return "Congratulations! You're going to have a son."}
    return "Congratulations! You're going to have a daughter.";
  }

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg == distanceToPump?true:false;
   };

   function find(array, element) {
    return array.indexOf(element)>=0?array.indexOf(element):"Not found";
    }

    function find(array, element) {
        return array.includes(element)?array.indexOf(element):"Not found"
      }

      function problem(x){
        return typeof x != 'number'?"Error":(x*50)+6;
      }

      function makeNegative(num) {
        if(num<0){
         return num;
        }else{
          return num *= (-1);
        }
      }