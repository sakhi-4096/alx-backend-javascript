// Creating a groceries list as a Map from an object
export default function groceriesList() {
  // Initialize a new Map and an object representing the groceries
  const finalMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  // Get all the keys in the object into an array
  const list = Object.keys(obj);

  // Map through the array and set the value to the key in the finalMap
  list.map((item) => finalMap.set(item, obj[item]));

  // Return the final Map representing the groceries list
  return finalMap;
}
