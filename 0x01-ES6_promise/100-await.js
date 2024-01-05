// Importing functions from the 'utils' module
import { uploadPhoto, createUser } from './utils';

// Function to asynchronously upload a photo and create a user
export default async function asyncUploadUser() {
  // Initialize the result object
  let res = {};

  try {
    // Asynchronously upload a photo and create a user
    const photo = await uploadPhoto();
    const user = await createUser();

    // Assign the results to the 'res' object
    res = { photo, user };
  } catch (error) {
    // If any error occurs during the asynchronous operations, catch it
    // and set the corresponding values in the 'res' object to null
    res = { photo: null, user: null };
  }

  // Return the result
  return res;
}
