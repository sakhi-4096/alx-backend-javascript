// Function to process a math function with guardrail
export default function guardrail(mathFunction) {
  // Array to store the results and messages
  const queue = [];

  try {
    // Attempt to execute the provided math function and push the result to the queue
    queue.push(mathFunction());
  } catch (err) {
    // If an error occurs during the execution, push the error message to the queue as a string
    queue.push(String(err));
  } finally {
    // Regardless of success or failure, push a message indicating that the guardrail was processed
    queue.push('Guardrail was processed');
  }

  // Return the resulting array
  return queue;
}
