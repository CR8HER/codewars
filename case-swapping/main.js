// Given a string, swap the case for each of the letters.

// e.g. CodEwArs --> cODeWaRS

// Examples
// ""           ->   ""
// "CodeWars"   ->   "cODEwARS"
// "abc"        ->   "ABC"
// "ABC"        ->   "abc"
// "123235"     ->   "123235"


function swap(str){
    let changeCase = ""
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
        changeCase += str[i].toUpperCase()
      } else {
        changeCase += str[i].toLowerCase()
      }
    }
    return changeCase
  }

  //One line solution to above problem.

//   const swap = (str) => str.split('').map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join('')