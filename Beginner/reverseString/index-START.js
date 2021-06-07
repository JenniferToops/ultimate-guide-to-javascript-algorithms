/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text) {
    return text.split("").reverse().join("");
}

// loop option, decremeting

function reverseString(text) {
    let result = ""
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}

// kind of loop "for-of" 

function reverseString(text) {
    let result = ""

    for (let char of text) {
        result = char + result
    }
    return result
}

// recursive way
function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substring(1)) + text [0]
    }
}

// reduce

function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, '')
}

// reduce with spread

function reverseString(text) {
    return [... text].reduce((acc, char) => char + acc, '')
}


module.exports = reverseString