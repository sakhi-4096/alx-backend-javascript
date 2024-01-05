/**
 * Represents an Airport with a name and a code.
 * @class
 */
export default class Airport {
  /**
   * Creates a new instance of the Airport class.
   * @constructor
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Gets the name of the airport.
   * @returns {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the airport.
   * @param {string} value - The new name value.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Gets the code of the airport.
   * @returns {string} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code of the airport.
   * @param {string} value - The new code value.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Provides a custom string representation of the object.
   * @returns {string} The code of the airport.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
