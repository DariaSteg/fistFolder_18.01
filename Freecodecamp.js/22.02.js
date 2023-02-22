function myLocalScope() {
    const myVar=9;
  
    console.log('inside myLocalScope', myVar);
  }
  
  myLocalScope();
  console.log('outside myLocalScope', myVar);
  