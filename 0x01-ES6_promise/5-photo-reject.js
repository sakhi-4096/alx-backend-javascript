// Function to simulate uploading a photo with a filename
export default function uploadPhoto(filename) {
  // Return a rejected Promise with an error indicating the filename cannot be processed
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
