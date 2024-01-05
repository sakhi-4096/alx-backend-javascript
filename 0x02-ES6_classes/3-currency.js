/**
 * Represents a Currency.
 * @class
 */
export default class CryptoCurrency {
  /**
   * Creates a new instance of the CryptoCurrency class.
   * @constructor
   * @param {string} code - The code of the cryptocurrency.
   * @param {string} name - The name of the cryptocurrency.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Gets the code of this cryptocurrency.
   * @returns {string} The code of the cryptocurrency.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code of this cryptocurrency.
   * @param {string} value - The new code value.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Gets the name of this cryptocurrency.
   * @returns {string} The name of the cryptocurrency.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this cryptocurrency.
   * @param {string} value - The new name value.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {string} The full string representation.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
