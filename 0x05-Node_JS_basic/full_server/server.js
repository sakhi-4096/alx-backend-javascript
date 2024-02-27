import express from 'express'; // Import the Express.js framework
import mapRoutes from './routes'; // Import route mapping function

const app = express(); // Create an Express application
const PORT = 1245; // Define the port number

// Map routes to the Express application
mapRoutes(app);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app; // Export the Express application as the default export
module.exports = app; // Export the Express application for compatibility with CommonJS
