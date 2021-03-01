/**
 * Method for Ackermann
 * Rules are placed in if statements
 * Rule 1 : if m = 0, then n + 1
 * Rule 2 : if m > 0 and n = 0, then A(m-1, 1)
 * Rule 3 : if m > 0 and n > 0, then A(m-1, A(m, n-1))
 * 
 * @param {number} m 
 * @param {number} n 
 * @return {number}
 */

const ackRecursive = (m, n) => {
    if (m == 0) {
        return n + 1;
    } else if(m > 0 && n == 0) {
        return ackRecursive(m-1, 1);
    } else if (m > 0 && n > 0) {
        return ackRecursive(m-1, ackRecursive(m, n-1));
    } else {
        return n + 1;
    }
}

const ackTernary = (m, n) => {
    return m == 0 ? n + 1
        : ackTernary(m-1, n == 0 ? 1 : ackTernary(m, n-1));
}

console.log('Ackermann Recursive\t:\t', ackRecursive(3, 2));
console.log('Ackermann Ternary\t:\t', ackTernary(3, 2));