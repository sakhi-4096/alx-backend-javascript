/**
 * Iterates through an object with an iterator and concatenates employee information.
 * @param {Object} reportWithIterator - The object with an iterator containing employee information.
 * @returns {string} A string containing concatenated employee information.
 */
export default function iterateThroughObject(reportWithIterator) {
  // Create an array to store employee information.
  const employees = [];

  // Iterate through the object with the provided iterator.
  for (const employee of reportWithIterator) {
    // Push each employee's information to the array.
    employees.push(employee);
  }

  // Return a string by joining the array elements with '|'.
  return employees.join(' | ');
}
