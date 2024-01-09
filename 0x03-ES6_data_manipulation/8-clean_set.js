// Cleaning Set values based on a specified string
export default function cleanSet(set, string) {
  // Check if the string is undefined or empty
  if (string === undefined || string.length === 0) {
    return '';
  }

  // Filter, map, and join to clean Set values based on the specified string
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(string) : ''))
    .map((str) => (str !== undefined ? str.slice(string.length) : ''))
    .join('-');
}
