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


module.exports = longestWord