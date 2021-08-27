// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//function sumMix(x){
  //let result = 0;
  //for (let n of x) {
    //result += parseInt(n);
  //}
  //return result;
//}

//The plus sign in front of cv forces the value to a number if it's a string.

const sumMix = x => x.reduce((acc,cv)=> +cv+acc, 0)