// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:

// [22, -6, 32, 82, 9, 25] => [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]



//Return syntax; solution with comments.

function multipleOfIndex(array) {
    let newArr = [] // the instructions say to return a new array, so we can use a for loop to iterate through our original array 
    // and we can test each element for whatever, and use .push() to put that element in our new empty array if it passes our test
    for(let i = 0; i < array.length; i++){
      if(array[i] % i === 0){ //array[i] is the current value at each iteration. i is just the index. this syntax means if the number
        // in the array is divisible by its index, we will push it into our new array
        newArr.push(array[i])
      }
    }return newArr // then we just have to return our new array outside the for loop and profit!
  }