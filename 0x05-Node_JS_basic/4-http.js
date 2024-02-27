const http = require('http');

// Define the port and host
const PORT = 1245;
const HOST = 'localhost';

// Create a new HTTP server instance
const app = http.createServer();

// Event listener for incoming requests
app.on('request', (_, res) => {
  // Define the response text
  const responseText = 'Hello Holberton School!';

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;

  // Write the response content to the response stream
  res.write(Buffer.from(responseText));
});

// Start the HTTP server and listen on the specified port and host
app.listen(PORT, HOST, () => {
  // Log a message indicating that the server is listening
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the created HTTP server instance
module.exports = app;
