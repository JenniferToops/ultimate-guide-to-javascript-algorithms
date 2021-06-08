/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// for-loop
function longestWord(text) {
    //turn the string into an array:
    let wordArray = text.split(' ')
    //declare the initial maxLength value
    let maxLength = 0
    //declare the result string
    let result = ''

    //set up loop to iterate over all of the elements in the array
    for (let i = 0; i < wordArray.length; i++) {
        //if the length of the element is greater than the maxLength
        if (wordArray[i].length > maxLength) {
            //reassign that element's length to the maxLength variable
            maxLength = wordArray[i].length
            //assign that (lengthiest) element to the result variable
            result = wordArray[i]
        }
    } //return the result (element containing the longest word)
        return result
}


//reduce() method

function longestWord(text) {
    //declare the result to point to the word array created by text.split(), which is reduced down to the currentWord whose length is greater than the accumulated maximumWord length value
    var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            //if the current word length is greater than the maxLengthWord length, return the current word 
            return currentWord
        } else {
            //otherwise, return the maxLengthWord
            return maxLengthWord
        }
        //be sure to provide the initial value of empty element
    }, "")
    //return the result of these chained methods
    return result
}





module.exports = longestWord