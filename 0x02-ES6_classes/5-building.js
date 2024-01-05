/**
 * Represents a Building with square footage information.
 * @class
 */
export default class Building {
  /**
   * Creates a new instance of the Building class.
   * @constructor
   * @param {number} sqft - The square footage of the building.
   * @throws {Error} Throws an error if a subclass fails to override evacuationWarningMessage.
   */
  constructor(sqft) {
    this.sqft = sqft;

    // Ensure that subclasses override the evacuationWarningMessage method
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /**
   * Gets the square footage of the building.
   * @returns {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building.
   * @param {number} value - The new square footage value.
   */
  set sqft(value) {
    this._sqft = value;
  }
}
