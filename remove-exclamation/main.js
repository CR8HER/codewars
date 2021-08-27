// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


//Regex

function removeExclamationMarks(s) {
    return s.replace(/!/g, '')
    } // replace takes two parameters, what we want to replace and what we want to replace it with. we are looking for whatever is between the two forward slashes and the g stands for global, meaning every instance of it not just the first one, and we are replacing it with an empty quote
    
//For Loops

function removeExclamationMarks(str) {
    let arr = str.split('') //convert string to array
    let newArr = [] //create new array for all non-! characters
    //cycle through each array element
    for (let i = 0; i < arr.length; i++) {
      //compare each item to '!'
      if (arr[i] !== '!') {
        newArr.push(arr[i])
      }
    }
    return newArr.join('')
  }