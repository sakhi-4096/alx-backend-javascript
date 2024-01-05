// Function to divide two numbers
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0, and throw an error if true
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    // Perform the division if the denominator is not 0
    return numerator / denominator;
  }
}
