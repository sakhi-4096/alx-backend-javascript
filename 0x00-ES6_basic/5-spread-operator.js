/**
 * Concatenates two arrays and a string into a new array.
 * @param {Array} array1 - The first array to be concatenated.
 * @param {Array} array2 - The second array to be concatenated.
 * @param {string} string - The string to be included in the new array.
 * @returns {Array} A new array resulting from the concatenation of array1, array2, and the string.
 */
export default function concatArrays(array1, array2, string) {
  // Use the spread operator to concatenate the arrays and string into a new array.
  return [...array1, ...array2, ...string];
}
