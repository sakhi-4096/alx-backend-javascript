/**
 * Creates an object with a specified department name and a list of employees.
 * @param {string} departmentName - The name of the department.
 * @param {Array} employees - An array of employee information.
 * @returns {Object} An object with the provided department name as a key and the employee list as its value.
 */
export default function createEmployeesObject(departmentName, employees) {
  // Use object shorthand to create an object with a dynamic key.
  return {
    [departmentName]: [
      ...employees,
    ],
  };
}
