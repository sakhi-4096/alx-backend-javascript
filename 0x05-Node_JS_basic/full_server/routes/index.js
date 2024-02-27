import AppController from '../controllers/AppController'; // Import the AppController class from the controllers module
import StudentsController from '../controllers/StudentsController'; // Import the StudentsController class from the controllers module

/**
 * Maps routes to route handlers.
 * @param {object} app - The Express application object.
 */
const mapRoutes = (app) => {
  // Map the root route to the getHomepage method of AppController
  app.get('/', AppController.getHomepage);
  // Map the /students route to the getAllStudents method of StudentsController
  app.get('/students', StudentsController.getAllStudents);
  // Map the /students/:major route to the getAllStudentsByMajor method of StudentsController
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes; // Export the mapRoutes function as the default export
module.exports = mapRoutes; // Export the mapRoutes function for compatibility with CommonJS
