// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array){
    let sum = array.reduce((acc,cv)=> acc+cv,0)
    return array.length ? sum/array.length : 0
  }

  