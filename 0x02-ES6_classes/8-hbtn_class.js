/**
 * Represents a HolbertonClass with size and location information.
 * @class
 */
export default class HolbertonClass {
  /**
   * Creates a new instance of the HolbertonClass class.
   * @constructor
   * @param {number} size - The size of the HolbertonClass.
   * @param {string} location - The location of the HolbertonClass.
   */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * Gets the size of the HolbertonClass.
   * @returns {number} The size of the HolbertonClass.
   */
  get size() {
    return this._size;
  }

  /**
   * Sets the size of the HolbertonClass.
   * @param {number} value - The new size value.
   */
  set size(value) {
    this._size = value;
  }

  /**
   * Gets the location of the HolbertonClass.
   * @returns {string} The location of the HolbertonClass.
   */
  get location() {
    return this._location;
  }

  /**
   * Sets the location of the HolbertonClass.
   * @param {string} value - The new location value.
   */
  set location(value) {
    this._location = value;
  }

  /**
   * Provides a custom conversion of the object to a primitive value.
   * @param {string} hint - The hint for the preferred type of conversion.
   * @returns {number|string|HolbertonClass} The converted value based on the hint.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
