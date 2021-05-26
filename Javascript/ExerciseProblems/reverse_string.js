/**
 * Given a string, reverse it
 * Example:
 *  apple -> elppa
 *  hello -> olleh
 */
let word = "Congratulations!"

// This here is a one line code to reverse a string
console.log(word.split("").reverse().join(""));

// Without using JavaScript libraries
let reverseWord = "";
for (let i of word) {
    reverseWord = i + reverseWord;
}
console.log(reverseWord);