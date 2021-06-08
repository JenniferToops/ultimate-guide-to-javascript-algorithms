/* In this exercise where we are given three parameters (str, word, newWord), replace the word in the "str" (string) with the newWord. 
*/

function searchReplace(str, word, newWord) {
    //check to see if the word is the first word of the sentence that needs to have first letter uppercase
    if (word[0] === word[0].toUpperCase() ) {
        newWord = newWord[0].toUpperCase + newWord.slice(1)
    }
    return str.replace(word, newWord)
}

function searchReplace(str, word, newWord) {
    //declare our regex containing our new RegExp with the word we need to replace which is globally case-insensitive
    let regex = new RegExp(word, "gi")
    //set up a condition to test if the word we need to replace starts with a capital letter
    if (/[A-Z]/.test(word[0])) {
        //if the first word does start with a capital letter, the character at index 0 in the newWord will be uppercased and we will concatenate the remaining (sliced) characters
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }
    //otherwise (index 0 character for the word we are replacing is not capitalized)
    return str.replace(regex, newWord)
}

module.exports = searchReplace