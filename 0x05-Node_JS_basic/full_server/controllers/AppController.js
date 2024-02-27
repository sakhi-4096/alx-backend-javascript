/**
 * Miscellaneous route controller.
 */
class AppController {
  /**
   * Get the homepage content.
   * @param {object} request - The request object.
   * @param {object} response - The response object.
   */
  static getHomepage(request, response) {
    // Send a 200 OK response with the message "Hello Holberton School!"
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController; // Export the AppController class as the default export
module.exports = AppController; // Export the AppController class for compatibility with CommonJS
