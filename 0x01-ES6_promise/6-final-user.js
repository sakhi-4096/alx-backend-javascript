// Importing functions from external modules
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Function to handle profile signup with user signup and photo upload
export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to execute both signUpUser and uploadPhoto in parallel
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => (
      // Map the results to a simplified format with status and value
      results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }))
    ));
}
