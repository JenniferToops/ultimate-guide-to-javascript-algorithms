/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// use for-of with incrementing
const vowels = ["a", "e", "i", "o", "u"]
function vowelsCounter(text) {

    let counter = 0;

    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
        counter++
        }
    }
    return counter
}

// use regular expression to return the number of of vowels
// going to use match() with regex to figure out # of vowels (use /gi)

function vowelsCounter(text) {
    const regex = /[aeiou]/gi
    let howMany = text.match(regex)
    return howMany.length
}











module.exports = vowelsCounter;
