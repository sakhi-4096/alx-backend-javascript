// Function to simulate an API response with success or failure
export default function getFullResponseFromAPI(success) {
  // Create a new Promise that resolves or rejects based on the 'success' parameter
  return new Promise((resolve, reject) => {
    // Check if 'success' is true, resolve with a success response
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If 'success' is false, reject with an error indicating API failure
      reject(new Error('The fake API is not working currently'));
    }
  });
}
