/**
 * Given an integer x, return true if x is a palindrome integer
 * An integer is a palindrome when it reads the same backward as forward.
 * For example 121 is palindrome while 123 is not
 * Follow Up: Can you solve it without converting the integer to a string?
 * @param {number} x 
 * @return {boolean}
*/

/**
 * This function converts the x parameter to decimal, thus accepts strings or numbers.
 * It compares it with the reverse value of x.
 * The value is made into an array, which is then reversed.
 * The reversed array is concatinated, which now identifies whether x is a palindrome.
 */
const isPalindrome = x => x.toString(10) === [... x.toString(10)].reverse().join('');
const isPalindrome2 = x => x == [... x.toString(10)].reverse().join('');

// Set of console.log to show sample inputs working
let i = 123321;
console.log('121\t:\t', isPalindrome(121));
console.log('-121\t:\t', isPalindrome(-121));
console.log('123\t:\t', isPalindrome(123));
console.log('"1221"\t:\t', isPalindrome("1221"));
console.log('"12222"\t:\t', isPalindrome("12222"));
console.log("123321\t:\t", isPalindrome2('123321'));