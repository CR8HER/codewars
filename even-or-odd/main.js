// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if(number % 2 === 0) return "Even"
    return 'Odd'
  }
  
  //arrow function with ternary operator. "?" means if and ":" means else
  
  const even_or_odd = number => number % 2 === 0 ? "Even" : "Odd"
  