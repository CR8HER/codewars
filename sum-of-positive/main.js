// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.a

function positiveSum(arr) {
    let posArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        posArr.push(arr[i])
      }
    }return posArr.reduce((acc, cv) => acc + cv, 0)
  }

  //Another solution:

//   const positiveSum = arr => arr.reduce((acc, cv) => acc + (cv > 0 ? cv : 0), 0)