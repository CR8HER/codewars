// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
    // good luck
    return number % a === 0 && number % b === 0
  }
  
  // these two functions are the same, above we are just returning an expression. It will return a boolean value, either 
  // the expression is true or false. Just a way to save some time typing..
  
  
  // function isDivideBy(number, a, b){
  //   if(number % a === 0 && number % b === 0){
  //     return true
  //   }else{
  //     return false
  //   }
  // }