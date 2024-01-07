/**
 * Creates a report object from a list of employees.
 * @param {Object} employeesList - The object containing employee information.
 * @returns {Object} A report object with the provided employee list and a method to get the number of departments.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      // Returns the number of departments in the employeesList.
      return Object.keys(employeesList).length;
    },
  };
}
