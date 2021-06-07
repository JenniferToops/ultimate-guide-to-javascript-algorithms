/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

//this is the fastest code
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
            console.log(charMap[char])
        } else {
            charMap[char] = 1
        } console.log(charMap)
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

//this is 30% slower
function maxRecurringchar(text) {
    let charMap = {}
    let charArray = []
    let valuesArray = []
    let maxCharValue = 0

//this is creating the charMap object
    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

//this is creating the array of keys/properties from the object
    charArray = Object.keys(charMap)
//this is creating the array of values from the object
    valuesArray = Object.values(charMap)
//this is finding the maximum value from the values array
    maxCharValue = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharValue)]

}


module.exports = maxRecurringChar;