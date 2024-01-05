// Function to handle responses from an API promise
export default function handleResponseFromAPI(promise) {
  // Return a promise chain with then, catch, and finally
  return promise
    .then(() => ({ status: 200, body: 'success' })) // Resolve with success response
    .catch(() => new Error()) // Reject with a generic error in case of failure
    .finally(() => console.log('Got a response from the API')); // Log a message when the promise is settled
}
