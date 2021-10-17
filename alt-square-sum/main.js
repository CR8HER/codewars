// Write a method alternate_sq_sum() (JS: alternateSqSum ) that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e., 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.

// NOTE:
// The values at even *position* need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, *etc.* should be squared because these are the second, fourth, and sixth positions in the list.

// For Example:
// alternateSqSum([11, 12, 13, 14, 15]) // should return 379

function alternateSqSum(arr){
  let altArr = []
  for(let i = 0; i < arr.length; i++){
    if(i % 2 === 0){
      altArr.push(arr[i])
    }else{
      altArr.push(arr[i]**2)
    }
  }return altArr.reduce((acc, cv)=> acc + cv, 0)
}