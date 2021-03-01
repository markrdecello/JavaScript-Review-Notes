const binarySearch = (arr, x) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        /**
         * Check if x is equal to arr[mid]
         * if true, then number is found
         */
        if (arr[mid] == x) {
            return mid;
        }

        /**
         * Check if x is greater than mid
         * if true, then increment mid by 1
         * else, decrement by 1
         */
        if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return "Not found";
}

let arr = [3, 20, 31, 35, 42, 60, 70, 71];
let searchFor = 71;
console.log(searchFor, ' is arr[', binarySearch(arr, searchFor), ']');
console.log(90, ' is arr[', binarySearch(arr, 90), ']');
console.log(35, ' is arr[', binarySearch(arr, 35), ']');
console.log(arr);