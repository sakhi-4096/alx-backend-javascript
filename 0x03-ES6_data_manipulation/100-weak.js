// Declaring a WeakMap for API endpoint tracking
export const weakMap = new WeakMap();

// Source: https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
export function queryAPI(endpoint) {
  let called = 0;

  // Check if the endpoint has been called before
  if (weakMap.get(endpoint)) {
    called = weakMap.get(endpoint);
  }

  // Update the count in the WeakMap for the endpoint
  weakMap.set(endpoint, called + 1);

  // Throw an error if the endpoint load is high
  if (called + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
