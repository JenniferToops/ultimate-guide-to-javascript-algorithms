/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



//chaining with reverse() SLOWEST
function palindromeChecker(text) {
    // everything to lower case, split into an array containing elements of each letter, reverse the order, then join back into a string
    let reversedText = text.toLowerCase().split('').reverse().join("")
    // return true or false whether the string was a palindrome
    return reversedText === text
}

module.exports = palindromeChecker;

//looping through & comparing characters with every() FASTEST
function palindromeChecker(text) {
    let textLen = text.length
    for (let i = 0; i < textLen/2; i++) {
        if (text[i] !== text[textLen - 1 -i])
            return false;
    } else {
    //turn the stinker into a lowercase array
    let charArray = text.toLowercase().split('')

    //iterates and returns over every letter in the lowercased-text-array starting 
    let result = charArray.every((letter, index) => letter === charArray[charArray.length - index - 1])
    return result
    }
}