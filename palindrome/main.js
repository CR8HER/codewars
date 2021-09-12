// Write function isPalindrom that checks if a given string (case insensitive) is a palindrom.

function isPalindrome(x) {
    if(x.toLowerCase() === x.toLowerCase().split('').reverse().join('')){
      return true
    }else{
      return false
    }
  }
  
  //arrow function syntax with boolean(true or false) expression
  const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('')