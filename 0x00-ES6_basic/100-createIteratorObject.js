/**
 * Creates an iterator object from a given report containing employee information.
 * @param {Object} report - The report object containing employee information.
 * @returns {Object} An iterator object with employee information.
 */
export default function createIteratorObject(report) {
  return (function* _() {
    // Iterate through each department and employee in the report.
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        // Yield each employee to the iterator.
        yield employee;
      }
    }
  }());
}
