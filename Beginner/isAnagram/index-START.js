/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

/*The faster implementation is the Character Map Comparison approach and the Direct Comparison method though concise is approximately 52% slower.*/


function isAnagram(stringA, stringB) {
    //create an anonymous function that will split the string into an array, then remove digits and characters and only leave undercase letters which are sorted in ascending order and then joined back into a string
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }
    //using the sanitize string function above, compare sanitized stringA to sanitized stringB and return a boolean value to indicate whether the strings are equal to each other (anagrams)
    return sanitizeString(stringA) == sanitizeString(stringB)
}

function isAnagram(stringA, stringB) {
    //create the character map so we can figure out how often each character occurs in each string
    function createCharMap(text) {
        //declare the charMap object variable
        let charMap = {}
        //loop through each character of a string
        for (let char of text) {
            //if the property (i.e. character) already exists in the map, add to the value
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
                //otherwise, create that property in the map and assign it a value of 1
            } else {
                charMap[char] = 1
            }
        } 
        //return the completed character map
        return charMap

    }
    //compare the lengths of the strings and if they are strictly equal...
    if (stringA.length === stringB.length) {
        //create a variable to hold the character map of stringA

        let stringAMap = createCharMap(stringA)
        //create a variable to hold the character map of stringB
        let stringBMap = createCharMap(stringB)

        //loop through the characteres in each stringMap
        for (let char in stringAMap) {
            //if the instances of each character in stringAMap are not equal to the instances of the characters in stringBMap
            if (stringAMap[char] !== stringBMap[char]) {
                //return false
                return false
            }
                //otherwise, return true
                return true            
        } 
        //if the string lengths aren't equal:
    }   else {
            //return false
            return false

    }
}

module.exports = isAnagram