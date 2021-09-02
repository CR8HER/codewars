// Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

// Example:

// m = 2
// n = 4

// result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]

function generatePairs(m, n) {
    let result = [];
    for (let i = m; i <= n; i++)
      for (let j = i; j <= n; j++)
        result.push([i, j]);
    return result;
  }

//   HIGH LEVEL SUMMARY

// To output an array of multiples, where int indicates the multiple factor, and limit indicates how much it will run to.

// let result = [] sets up a variable array placeholder so we can populate it with our loop results.

// for(start, condition, adjust) to create looping iterations, where we start with our 'int', condition to be 'limit', and update/add our i based on our 'int' factor.

// push(i) adds the updated i's into our variable placeholder array.