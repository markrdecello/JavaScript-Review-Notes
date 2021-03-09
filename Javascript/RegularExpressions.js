/**
 * Apply the regex myRegex on the string myString using the .test() method
 */
let myString = "Hello World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log("Example 1 - Complete\n\tresult : ", result);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match
 */
let waldoIsHiding = "Somewhere Waldo is hiding in this text";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);
console.log("Example 2 - Complete\n\tresult2 : ", result2);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Complete the regex petRegex to match the pets dog, cat, bird, or fish
 */
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString);
console.log("Example 3 - Complete\n\t result3 : ", result3);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**l
 * Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any
 * abbreviations or variations with spaces.
 */
let myString2 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result4 = fccRegex.test(myString2);
console.log("Example 4 - Complete\n\tresult4 : ", result4);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Apply the .match() method to extract the string coding
 */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);
console.log("Example 5 - Complete\n\tresult5 : ", result5);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar
 */
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result6 = twinkleStar.match(starRegex);
console.log("Example 6 - Complete\n\tresult6 : ", result6);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your
 * regex should use the wildcard character
 */
let exampleStr = "Let's have fun with regular expressions";
let unRegex = /.un/;
let result7 = unRegex.test(exampleStr);
console.log("Example 7 - Complete\n\tresult7 : ", result7);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in
 * the string quoteSample
 */
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result8 = quoteSample.match(vowelRegex);
console.log("Example 8 - Complete\n\tresult8 : ", result8);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Match all the letters in the string quoteSample2
 */
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result9 = quoteSample2.match(alphabetRegex);
console.log("Example 9 - Complete\n\tresult9 : ", result9);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Create a single regex that matches a range of letters between h and s, and a range of numbers between 2
 * and 6. Remember to include the appropriate flags in the regex.
 */
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig;
let result10 = quoteSample3.match(myRegex2);
console.log("Example 10 - Complete\n\tresult10 : ", result10);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Create a single regex that matches all characters that are not a number or a vowel. Remember to
 * include the appropriate flags in the regex;
 */
let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]/ig;
let result11 = quoteSample4.match(myRegex3);
console.log("Example 11 - Complete\n\tresult11 : ", result11);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex
 * that uses the + sign
 */
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/gi;
let result12 = difficultSpelling.match(myRegex4);
console.log("Example 12 - Complete\n\tresult12 : ", result12);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the
 * scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately
 * followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character
 * classes, and it should not match any of the other quotes.
 */
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/g;
let result13 = chewieQuote.match(chewieRegex);
console.log("Example 13 - Complete\n\tresult13 : ", result13);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember
 * the wildcard . in a regular expression matches any character.
 */
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/gi;
let result14 = text.match(myRegex5);
console.log("Example 14 - Complete\n\tresult14 : ", result14);

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Write a greedy regex that finds one or more criminals within a group of other people. A criminal is 
 * represented by the capital letter C
 */
let criminals = /C+/;
console.log("Example 15 - Complete\n");

/*___________________________________________________________________________________________________________
___________________________________________________________________________________________________________*/

/**
 * Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal
 */
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/gi;
let result15 = calRegex.test(rickyAndCal);
console.log("Example 16 - Complete\n\tresult15 : ", result15);