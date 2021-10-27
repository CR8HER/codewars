// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    const wordArr = s.split(' ') // split the string into an array of words
    const shortestWord = wordArr.sort((a,b) => a.length - b.length)[0] // sort it by length and grab the first word
    return shortestWord.length // returns the amount of letters in the first word of ^
   }