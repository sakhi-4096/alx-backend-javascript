/**
 * Generates a description of San Francisco's economic statistics for a specific year.
 * @returns {string} A formatted description of San Francisco's income, GDP, and per capita statistics.
 */
export default function getSanFranciscoDescription() {
  // Define the year and budget information.
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  // Generate and return a formatted description using template literals.
  return `As of ${year}, it was the seventh-highest income county in the United States,\
 with a per capita personal income of ${budget.income}. As of 2015, San Francisco \
 proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
