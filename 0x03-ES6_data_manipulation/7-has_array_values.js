// Checking if Set has all values from the array
export default function hasValuesFromArray(set, list) {
  let verdict = true;

  // Iterate over the array and check if each value is in the Set
  list.map((x) => {
    if (!set.has(x)) {
      verdict = false;
    }
  });

  return verdict;
}
