const http = require('http');
const fs = require('fs');

// Define constants for server configuration
const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

// Create an HTTP server instance
const app = http.createServer();

// Function to count students from a given data path
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Check if data path is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  // Read the file asynchronously
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      // Initialize an array to store report parts
      const reportParts = [];
      // Split file content into lines
      const fileLines = data.toString('utf-8').trim().split('\n');
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
        const studentEntries = studentPropNames.map((propName, idx) => [
          propName,
          studentPropValues[idx],
        ]);
        // Push the student entry to the respective group
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate total number of students
      const totalStudents = Object.values(studentGroups).reduce((pre, cur) => (pre || []).length + cur.length);
      reportParts.push(`Number of students: ${totalStudents}`);

      // Iterate through each group and add information to reportParts
      for (const [field, group] of Object.entries(studentGroups)) {
        reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
      }

      // Resolve the promise with the joined report parts
      resolve(reportParts.join('\n'));
    }
  });
});

// Route handlers for different endpoints
const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      // Count students and handle response
      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

// Event listener for incoming requests
app.on('request', (req, res) => {
  // Match the requested URL to a route handler
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

// Start the HTTP server and listen on the specified port and host
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the created HTTP server instance
module.exports = app;
