/*
 *    Write a function:
 *
 *       function solution(A);
 *
 *    that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
 *    For example, 
 *
 *        : Given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 *        : Given A = [1, 2, 3], the function should return 4.
 *        : Given A = [−1, −3], the function should return 1.
 *
 *    Write an efficient algorithm for the following assumptions:
 *
 *        : N is an integer within the range [1..100,000];
 *        : each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

const solution = A => {
    let result = [];
    /*
     *  : Let's create a for loop to make sure each number in the array is a positive integer.
     *  : if true, then we'll make the value of A[x] become an index of result[] and set the value to true
     */
    for (let x = 0; x < A.length; x++) {
        if (A[x] >= 0) {
            result[ A[x] ] = true;
        }
    }
    /**
     *  : Let's create another loop to determine the missing smallest positive integer
     *  : Since we're looking for positive integers, we'll set the value of x to 1. Also, we want the loop to be skipped if result is an empty array
     *      : [FYI] 0 is neither a postive or negative integer
     *  : For each increment of 1, the loop will eventually identify the missing smallest integer when the index is undefined
     *  : The loop will be skipped if the numbers in the A array are all negative since result will be an empty array
     *      : x <= result.length
     *          : 1 <= 0
     *  : Therefore, everytime all values are negative in the array, the function will always return 1
     */
    for (let x = 1; x <= result.length; x++) {
        if (result[x] == undefined) {
            return x;
        }
    }
    return 1;
}

//let A = [1, 3, 6, 4, 1, 2];
//let A = [1, 2, 3];
let A = [-1, -3];
console.log(solution(A));
