import Building from './5-building';

/**
 * Represents a tall building extending the Building class.
 * @class
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new instance of the SkyHighBuilding class.
   * @constructor
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Gets the number of floors in the building.
   * @returns {number} The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors in the building.
   * @param {number} value - The new number of floors value.
   */
  set floors(value) {
    this._floors = value;
  }

  /**
   * Overrides the evacuationWarningMessage method to provide a custom message.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
