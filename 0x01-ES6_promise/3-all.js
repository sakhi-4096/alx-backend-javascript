// Importing functions from the 'utils' module
import { uploadPhoto, createUser } from './utils';

// Function to handle profile signup
export default function handleProfileSignup() {
  // Use Promise.all to execute both uploadPhoto and createUser in parallel
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoRes, userRes]) => {
      // Destructure the results and log the information
      console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
    })
    .catch(() => {
      // Log a message if there's an error during the signup process
      console.log('Signup system offline');
    });
}
