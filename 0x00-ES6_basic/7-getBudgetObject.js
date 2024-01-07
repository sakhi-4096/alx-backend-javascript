/**
 * Creates a budget object with specified income, GDP, and per capita values.
 * @param {string} income - The income value to be included in the budget object.
 * @param {string} gdp - The GDP value to be included in the budget object.
 * @param {string} capita - The per capita value to be included in the budget object.
 * @returns {Object} A budget object with the provided income, GDP, and per capita values.
 */
export default function getBudgetObject(income, gdp, capita) {
  // Create a budget object with the specified income, GDP, and per capita values.
  const budget = {
    income,
    gdp,
    capita,
  };

  // Return the budget object.
  return budget;
}
