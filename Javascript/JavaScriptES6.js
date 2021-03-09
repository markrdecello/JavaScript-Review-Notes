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

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Modify the function increment by adding default parameters so that it will add 1 to number
 * if value is not specified
 */
//const increment = (number, value) => number + value;
const increment = (number, value = 1) => number + value;

console.log("Example 8 - Complete\n\tincrement : ", increment(3));

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Modify the function sum using the rest parameter in such a way that the function is able to take
 * any number of arguments and return their sum
 */
/*const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a+b, 0);
}*/
const sum = (... args) => {
    return args.reduce((a, b) => a+b, 0);
}

console.log("Example 9 - Complete\n\tsum : ", sum(2, 4, 5));

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Copy all contents of arr1 into another array arr2 using the spread operator
 */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log("Example 10 - Complete\n\tarr2 : ", arr2);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Replace the two assignments with an equivalent destructuring assignment. It should still assign
 * the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object
 */
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

/*const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;*/
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log("Example 11 - Complete\n\ttoday : ", today, " tomorrow : ",tomorrow);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Replace the two assignments with an equivalent destructuring assignment. It should still assign
 * the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES
 * object
 */
const { today: highToday, tomorrow: highTomorow } = HIGH_TEMPERATURES;
console.log("Example 12 - Complete\n\thighToday : ", highToday, " highTomorrow : ", highTomorow);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Replace the two assignments with an equivalent destructuring assignment. It should still assign the
 * variables lowToday and highToday the values of today.low and today.high from LOCAL_FORECAST object
 */
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday2 }} = LOCAL_FORECAST;
console.log("Example 13 - Complete\n\tlowToday : ", lowToday, " highToday : ", highToday2);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, 
 * and b receives the value stored in a
 */
let a = 8, b = 6;

[a, b] = [b, a];
console.log("Example 14 - Complete\n\ta : ", a, " b : ", b);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice()
 * so that arr is a sub-aray of the original array source with the first two elements omitted
 */
const source = [1,2,3,4,5,6,7,8,9,10];
const removeFirstTwo = (list) => {
    const [,, ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log("Exmple 15 - Complete\n\tarr : ", arr);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Use destructuring assignment within the argument to the function half to send only max and min
 * inside the function
 */
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

//const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({ max, min }) => (max + min) / 2.0;
console.log("Example 16 - Complete\n\thalf : ", half(stats));

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Use template literal syntax with backticks to create an array of elemts (li) strings. Each list 
 * element's text should be one of the array elements from the failure property on the result object
 * and have a class attribute with the value text-warning. The makeList function should return the 
 * array of list item strings
 * 
 * Use an iterator method (any kind of loop) to get the desired output:
 * [
 *      '<li class="text-warning">no-var</li>',
 *      '<li class="text-warning">var-on-top</li>',
 *      '<li class='text-warning">linebreak</li>'
 * ]
 */
const result = {
    success: ["max-length", "no-amd", "prefer-arraow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
const makeList = (arr) => {
    const failureItems = [];
    for(let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    return failureItems;
}
const failureList = makeList(result.failure);
console.log("Example 17 - Complete\n\tfailureList : ", failureList);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Use the object property shorthand with object literals to create and return an object with name,
 * age and gender properties
 */
const createPerson = (name, age, gender) => ({ name, age, gender });

console.log("Example 18 - Complete\n\tcreatePerson : ", createPerson("Mark", 25, "Male"));

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Refactor the function setGear inside the object bicycle to use the shorthand syntax
 */
const bicycle = {
    gear: 2,
    /*setGear: function(newGear) {
        this.gear = newGear;
    }*/
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log("Example 19 - Complete\n\tbicycle.gear : ", bicycle.gear);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Use the class keyword and write a constructor to create the Vegetable class. The Vegetable class allows
 * to create a vegetable object with a porperty name that gets passed to the constructor.
 */
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log("Example 20 - Complete\n\tcarrot.name : ", carrot.name);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
 * In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature
 * in Celsius. Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature
 * in Fahrenheit, and C is the value of the same temperature in Celsius.
 * NOTE: When you implement this, you will track the temperature inside the class in one scale, either
 * Fahrenheit or Celsius.
 * This is the power of a getter and a setter. You are creating an API for another user, who can get the 
 * correct result regardless of which one you track. In other words, you are abstracting implementation
 * details from the user.
 */
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
    //getter
    get temperature() {
        return (5/9 * (this.fahrenheit - 32));
    }

    //setter
    set temperature(celsius) {
        this.fahrenheit = celsius * 9.0 / 5 + 32;
    }
}

const thermos = new Thermostat(76); //Setting in Fahrenheit scale
let temp = thermos.temperature; //24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log("Example 21 - Complete\n\ttemp : ", temp);

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Add a script to the HTML document of type module and give it the source file of index.js
 */
/*<html>
    <body>
        <script type="module" src="index.js"></script>
    </body>
</html>*/
console.log("Example 22 - Complete\n");

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * There are two string-related functions in the editor. Export both of them using the method of your choice 
 */
const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase();
}

//export { uppercaseString, lowercaseString };
console.log("Example 23 - Complete\n");

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Add the appropriate import statement that will allow the current file to use the uppercaseString
 * and lowercaseString fucntions you exported. These functions are in a file called string_functions.js,
 * which is in the same directoy as the current file
 */

//import {uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
console.log("Example 24 - Complete\n\t", uppercaseString("hello"), lowercaseString(" WORLD!"));

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Use the import * as syntac to import everything from the file into an object called stringfunctions
 */

/*import * as stringFunctions from './string_functions.js';

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");*/
console.log("Example 25 - Complete\n");

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * The following functions should be the fallback value for the module. Please add the necessary code to do so
 */

/*export default function subtract(x, y) {
    return x - y;
}*/
console.log("Example 26 - Complete\n");

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * In the following code, import the default export from the math_functions.js file. Give the import name subtract
 */

/*import subtract from './math_functions.js';
subtract(7,4);*/

console.log("Example 27 - Complete\n");

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters
 * to the constructor
 */
const makeServerRequest = new Promise((resolve, reject) => {

});
console.log("Example 28 - Complete\n")

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Make the promise handle success and failure. If responseFromServer is true, call the resolve method to
 * successfully complete the promise. Pass resolve a string with the value We got the data. If 
 * responseFromServer is false, use the reject method instead and pass it the string: Data not received
 */

/*const makeServerRequest2 = new Promise((resolve, reject) => {
    let responseFromServer;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});*/

console.log("Example 29 - Complete\n");

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Add the then method to your promise. Use result as the parameter of its callback function and log
 * result to the console
 */
/*const makeServerRequest2 = new Promise((resolve, reject) => {
    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequest2.then(result => {
    console.log("Example 30 - Complete\n\tresult : ", result);
});*/
console.log("Example 30 - Complete\n");

/*-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

/**
 * Add the catch method to your promise. Use error as the parameter of its callback function and
 * log error to the console
 */
/*const makeServerRequest3 = new Promise((resolve, reject) => {
    let responseFromServer = false;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        throw "Data not received";
    }
});
makeServerRequest3.then(result => {
    console.log(result);
});
makeServerRequest3.catch(error => {
    console.log("Example 31 - Complete\n\terror : ", error);
});*/
console.log("Example 31 - Complete\n");


