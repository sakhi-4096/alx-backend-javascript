/**
 * Appends a specified string to each value in the given array.
 * @param {Array} array - The array of values to be modified.
 * @param {string} appendString - The string to append to each array value.
 * @returns {Array} A new array with each value appended by the specified string.
 */
export default function appendToEachArrayValue(array, appendString) {
  // Create a new array to store modified values.
  const newArray = [];

  // Iterate through each value in the input array and append the specified string.
  for (const value of array) {
    newArray.push(appendString + value);
  }

  // Return the new array with modified values.
  return newArray;
}
