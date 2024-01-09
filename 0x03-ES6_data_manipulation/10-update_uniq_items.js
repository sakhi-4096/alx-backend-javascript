// Disabling eslint rule to allow parameter reassignment
export default function updateUniqueItems(map) {
  // Check if input is a Map
  if (map instanceof Map) {
    // Iterate over key-value pairs in the map
    for (const [key, value] of map) {
      // Update values equal to 1 to 100
      if (value === 1) {
        map.set(key, 100);
      }
    }

    return map; // Return the updated map
  }

  // Throw an error if input is not a Map
  throw new Error('Cannot process');
}
