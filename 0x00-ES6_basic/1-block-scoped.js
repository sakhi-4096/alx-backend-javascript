/**
 * Demonstrates block-scoping with if statement.
 * @param {boolean} trueOrFalse - A boolean value to determine block execution.
 * @returns {Array} An array containing two values representing task and task2.
 */
export default function taskBlock(trueOrFalse) {
  // Default values for task and task2
  const task = false;
  const task2 = true;

  // If trueOrFalse is true, create a block-scoped context and redefine task and task2.
  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  // Return an array with the values of task and task2.
  return [task, task2];
}
