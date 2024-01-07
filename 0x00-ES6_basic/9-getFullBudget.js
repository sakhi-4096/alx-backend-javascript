import getBudgetObject from './7-getBudgetObject';

/**
 * Creates a full budget object with specified income, GDP, and per capita values,
 * along with additional methods to format income in dollars and euros.
 * @param {string} income - The income value to be included in the budget object.
 * @param {string} gdp - The GDP value to be included in the budget object.
 * @param {string} capita - The per capita value to be included in the budget object.
 * @returns {Object} A full budget object with the provided values and additional methods.
 */
export default function getFullBudgetObject(income, gdp, capita) {
  // Create a budget object using the provided function.
  const budget = getBudgetObject(income, gdp, capita);

  // Create a full budget object by spreading the original budget and adding additional methods.
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      // Method to format income in dollars.
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      // Method to format income in euros.
      return `${income} euros`;
    },
  };

  // Return the full budget object.
  return fullBudget;
}
