/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

// using "forEach()" 2ND FASTEST--15% SLOWER THAN MAP/SLICE
function capSentence(text) {
  // turn string into an array where each element is one word from the string
  let wordsArray = text.toLowerCase().split(' ')
  // create an empty array that will contain the words with first letters capitalized
  let capsArray = []

  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1))
  })

  return capsArray.join(' ')
}

// using .map() and .slice()   FASTEST
function capSentence(text) {
// turn the string into an array of lower case letters
let wordsArray = text.toLowerCase().split(' ')
// create the array with capital letters at the beginning of each word
let capsArray = wordsArray.map(word => word[0].toUpperCase() + word.slice(1))
//return the capitalized array
return capsArray.join(' ')
}


// using map() and replace()  SLOWEST 29% SLOWER
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word => word.replace(word[0], word[0].toUpperCase()))
  return capsArray.join(' ')
}



module.exports = capSentence