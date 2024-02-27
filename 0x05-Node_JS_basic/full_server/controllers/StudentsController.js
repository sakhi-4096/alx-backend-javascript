import readDatabase from '../utils'; // Import the readDatabase function from the utils module

const VALID_MAJORS = ['CS', 'SWE']; // Define an array of valid majors

/**
 * Contains route handlers for student-related endpoints.
 */
class StudentsController {
  /**
   * Get information about all students.
   * @param {object} request - The request object.
   * @param {object} response - The response object.
   */
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : ''; // Get the database file path from command line arguments

    // Read the database asynchronously
    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        // A comparison function for ordering a list of strings in ascending
        // order by alphabetic order and case insensitive
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        // Iterate through student groups, sort them alphabetically, and construct response parts
        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        // Send a 200 OK response with the joined response parts
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        // If an error occurs, send a 500 Internal Server Error response
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  /**
   * Get information about students by major.
   * @param {object} request - The request object.
   * @param {object} response - The response object.
   */
  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : ''; // Get the database file path from command line arguments
    const { major } = request.params; // Extract the major parameter from the request

    // Validate the major parameter
    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    // Read the database asynchronously
    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        // If the major exists in the student groups, construct the response text
        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        // Send a 200 OK response with the response text
        response.status(200).send(responseText);
      })
      .catch((err) => {
        // If an error occurs, send a 500 Internal Server Error response
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController; // Export the StudentsController class as the default export
module.exports = StudentsController; // Export the StudentsController class for compatibility with CommonJS
