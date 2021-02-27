/**
 * You are given two strings word1 and word2. Merge the strings by adding in alternating order,
 * starting with word1. If a string is longer than the other, append the additional letters onto 
 * the end of the merge string.
 * Return the merged string
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    let wordLength = 0;
    let mergeStr = '';
    if (word1.length >= word2.length) {
        wordLength = word1.length;
    } else {
        wordLength = word2.length;
    }
    for (let i = 0; i < wordLength; i++) {
        if (word1[i] == undefined) {
            mergeStr = mergeStr + word2[i];
        } else if (word2[i] == undefined) {
            mergeStr = mergeStr + word1[i];
        } else {
            mergeStr = mergeStr + word1[i] + word2[i];
        }
    }
    return mergeStr;
};
console.log('word1 = "abc", word2 = "pqr"\t:\t', mergeAlternately("abc", "pqr"));
console.log('word1 = "ab", word2 = "pqrs"\t:\t', mergeAlternately("ab", "pqrs"));
console.log('word1 = "abcd", word2 = "pq"\t:\t', mergeAlternately("abcd", "pq"));
console.log('word1 = "pkmn", word2 = "oeo"\t:\t', mergeAlternately("pkmn", "oeo"));
console.log('word1 = "dmnsae", word2 = "eo lyr":\t', mergeAlternately("dmnsae", "eo lyr"));