/* In this challenge, we will implement a JavaScript function that translates any English word supplied to Pig Latin. */

function pigLatin(str) {
    //convert string to lowercase
    str = str.toLowerCase()
    //initialize array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //initialize vowelIndex to 0
    let vowelIndex = 0

    if (vowels.includes(str[0])) {
        //if first letter is a vowel
        return str + 'way';
    } else {
        //if the first letter isn't a vowel, i.e., is a consonant
        for (let char of str) {
            //loop through until the first vowel is found
            if (vowels.includes(char)) {
                //store the index at which the first vowel exists
                vowelIndex = str.indexOf(char)
                break
            }
        }
            //compose final string by slicing the word at the index of the vowel and concatenating it with the consonant at index 0 concatenated with the string'ay' at the end
            return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay'

    }

}

function pigLatin(str) {
    //return string modified with following:
    return str
    //i feel like I should comment on this to learn what it is, but i am out of attention so....
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}







module.exports = pigLatin