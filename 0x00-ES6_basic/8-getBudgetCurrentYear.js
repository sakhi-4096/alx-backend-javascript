/**
 * Gets the current year using the Date object.
 * @returns {number} The current year.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Creates a budget object for the current year with specified income, GDP, and per capita values.
 * @param {string} income - The income value to be included in the budget object.
 * @param {string} gdp - The GDP value to be included in the budget object.
 * @param {string} capita - The per capita value to be included in the budget object.
 * @returns {Object} A budget object with the provided income, GDP, and per capita values for the current year.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Create a budget object with dynamic keys including the current year.
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  // Return the budget object for the current year.
  return budget;
}
