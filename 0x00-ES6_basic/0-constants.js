/**
 * Returns a string representing the first task.
 * @returns {string} The task string.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Returns a string indicating that a particular choice is okay.
 * @returns {string} The okay string.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Combines the result of the first task with an additional string.
 * @returns {string} The combined string.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
