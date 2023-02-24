function chromosomeCheck(sperm) {
    if(sperm.indexOf('Y')>0){
    return "Congratulations! You're going to have a son."}
    return "Congratulations! You're going to have a daughter.";
  }

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg == distanceToPump?true:false;
   };