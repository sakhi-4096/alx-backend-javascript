import fs from 'fs'; // Import the Node.js filesystem module

/**
 * Reads the data of students in a CSV data file.
 * @param {string} dataPath - The path to the CSV data file.
 * @returns {Promise<Object>} A promise that resolves with an object representing student groups, 
 * where keys are group names and values are arrays of student objects.
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  // Check if dataPath is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    // Read the file asynchronously
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        // Initialize an object to store student groups
        const studentGroups = {};
        // Split file content into lines
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        // Get field names from the first line of the file
        const dbFieldNames = fileLines[0].split(',');
        // Extract property names of students
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        // Iterate through each line in the file (excluding the header)
        for (const line of fileLines.slice(1)) {
          // Split the line into fields
          const studentRecord = line.split(',');
          // Extract property values of the student
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          // Get the field value (e.g., class, group)
          const field = studentRecord[studentRecord.length - 1];
          // If the field is not a key in studentGroups, initialize it as an empty array
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          // Map property names to property values and create student entries
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          // Push the student entry to the respective group
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        // Resolve the promise with the object representing student groups
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase; // Export the readDatabase function
module.exports = readDatabase;
