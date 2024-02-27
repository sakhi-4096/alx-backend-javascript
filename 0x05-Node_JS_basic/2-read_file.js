const fs = require('fs');

// Function to count students and group them based on a field
const countStudents = (dataPath) => {
  // Check if the data file exists
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  // Check if the data path is a file
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read the file and split it into lines
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  // Object to store student groups
  const studentGroups = {};
  // Get field names from the first line of the file
  const dbFieldNames = fileLines[0].split(',');
  // Extract property names of students
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  // Iterate through each line in the file (excluding the header)
  for (const line of fileLines.slice(1)) {
    // Split the line into fields
    const studentRecord = line.split(',');
    // Extract property values of the student
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
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

  // Calculate total number of students
  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  // Print total number of students
  console.log(`Number of students: ${totalStudents}`);

  // Iterate through each group and print the number of students in each group along with their names
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents; // Export the countStudents function
