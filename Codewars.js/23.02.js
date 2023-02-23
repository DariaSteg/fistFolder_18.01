function litres(time) {
    return Math.trunc(time * 0.5);
  }

  function describeAge(age) {
    return age <= 12?"You're a(n) kid":age >= 13 && age <= 17?"You're a(n) teenager":age >= 18 && age <= 64?
      "You're a(n) adult":"You're a(n) elderly";
   
   }