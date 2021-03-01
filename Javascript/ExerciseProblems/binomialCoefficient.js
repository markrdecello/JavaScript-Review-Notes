const binomialCoefficient = (n, k) => {
    if (k > n) return 0;
    if (k == 0 || k == n) {
        return 1;
    } else {
        return binomialCoefficient(n-1, k-1) + binomialCoefficient(n-1, k);
    }
}

console.log(binomialCoefficient(5, 3));