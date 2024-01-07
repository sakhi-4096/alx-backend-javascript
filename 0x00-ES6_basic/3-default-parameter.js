/**
 * Calculates the sum of initialNumber and two expansion values.
 * @param {number} initialNumber - The initial numeric value.
 * @param {number} expansion1989 - The expansion value for the year 1989 (default: 89).
 * @param {number} expansion2019 - The expansion value for the year 2019 (default: 19).
 * @returns {number} The sum of the initialNumber and the two expansion values.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  // Return the sum of the initial number and the two expansion values.
  return initialNumber + expansion1989 + expansion2019;
}
