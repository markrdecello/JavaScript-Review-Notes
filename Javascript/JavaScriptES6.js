// Let's Review JavaScript - ES6

    /*
        One of the biggest problems with declaring variables with the var keyword is that you can 
        overwrite variable declarations without an error. Unlike var, when using let, a variable
        with the same name can only be declared once.
    */
/*
    Update the code so it only uses the let keyword
*/
/*var catName;
var quote;*/
let catName;
let quote;
const catTalk = () => {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!"
    return quote;
}
console.log("Example 1 - Complete\n\tcatTalk : " + catTalk());

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/*
    Fix the code so that i declared in the if statement is a separate variable than i declared in the
    first line of the function. Be certain not to use the var keyword anywhere in your code.
    This exercise is designed to illustrate the difference between how var and let keywords assign
    scope to the declared variable. When programming a function similar to the one used in this
    exercise, it is often better to use different variable names to avoid confusion.
*/
const checkScope = () => {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('\n\tBlock scope i is: ', i);
    }
    console.log('\tFunction scope i is: ', i);
    return i;
}
console.log('Example 2 - Complete\n\tcheckScope: ', checkScope());

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/*
    Change the code so that all variables are declared using let or const. Use let when you want the
    variable to change, and const when you want the variable to remain constant. Also, rename variables
    declared with const to conform to common practices, meaning constants should be in all caps.
*/
const printManyTimes = (str) => {
    /*var sentence = str + ' is cool!';
    for (var i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }*/
    const SENTENCE = str + ' is cool';
    for (let i = 0; i < str.length; i+=2) {
        console.log('\t', SENTENCE);
    }
    return SENTENCE;
}
console.log('Example 3 - Complete\n\tprintManyTimes : ', printManyTimes('Coding'));

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/*
    An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
*/
const s = [5, 7, 2];
const editInPlace = () => {
    s.pop();
    s.unshift(2);
    return s;
}
console.log('Example 4 - Complete\n\teditInPlace : ', editInPlace());

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/*
    In this challenge you are going to use Object.freeze to prevent mathematical constants from changing.
    You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add,
    or delete properties.
*/
const freezeObj = () => {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log('Example 5 - Complete\n\tfreezeObj : ', PI);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/*
    Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function
    syntax. Also, make sure nothing is defined using the keyword var.
*/
/*var magic = function() {
    return new Date();
};*/
const magic = () => new Date();
console.log('Example 6 - Complete\n\tmagic : ', magic());

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/*
    Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses
    arrow function syntax.
*/
/*var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1,2], [3,4,5]));*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log("Example 7 - Complete\n\tmyConcat : ", myConcat([1,2], [3,4,5]));