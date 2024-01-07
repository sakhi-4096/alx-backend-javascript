/**
 * Initializes an object with a list of San Francisco neighborhoods and a method to add new neighborhoods.
 * @returns {Object} An object with a list of neighborhoods and an 'addNeighborhood' method.
 */
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Use 'self' to maintain context in the arrow function.
  const self = this;

  // Method to add a new neighborhood to the list.
  this.addNeighborhood = (newNeighborhood) => {
    // Add the new neighborhood to the list.
    self.sanFranciscoNeighborhoods.push(newNeighborhood);

    // Return the updated list of neighborhoods.
    return self.sanFranciscoNeighborhoods;
  };
}
