// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    return Math.floor(marks.reduce((acc,cv)=>acc + cv, 0) / marks.length)
  }
  
  //for loop doing the same thing as reduce
  
  // function getAverage(marks){
  //   let count = 0
  //   for (let i = 0; i < marks.length; i++){
  //     count += marks[i]
  //   }return Math.floor(count / marks.length)
  // } 