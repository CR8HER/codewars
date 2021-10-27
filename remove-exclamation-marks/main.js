// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let arr = s.split('')
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== '!'){
        newArr.push(arr[i])
      }
    }return newArr.join('')
  }