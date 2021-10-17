// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Only capital characters can and will participate a battle.
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"
// Related kata:
// Battle of the characters (Medium)


function battle(x, y) {
    const alpha = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const score = word => word.split('').reduce((acc, currentLetter) => acc + alpha.indexOf(currentLetter), 0)
    
    return score(x) > score(y) ? x : score(y) > score(x) ? y : "Tie!"
  
  }