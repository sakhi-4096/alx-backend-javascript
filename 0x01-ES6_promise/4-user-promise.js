// Function to simulate signing up a user with first name and last name
export default function signUpUser(firstName, lastName) {
  // Return a resolved Promise with an object containing first and last names
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}
