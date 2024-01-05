import Currency from './3-currency';

/**
 * Represents a Pricing with an amount and a currency.
 * @class
 */
export default class Pricing {
  /**
   * Creates a new instance of the Pricing class.
   * @constructor
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Gets the amount of this pricing.
   * @returns {number} The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount of this pricing.
   * @param {number} value - The new amount value.
   * @throws {TypeError} Throws an error if the value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Gets the currency of this pricing.
   * @returns {Currency} The currency of the pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency of this pricing.
   * @param {Currency} value - The new currency value.
   * @throws {TypeError} Throws an error if the value is not an instance of Currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  /**
   * Creates the full string representation of this Pricing.
   * @returns {string} The full string representation.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts the given amount using the provided conversion rate.
   * @static
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted amount.
   * @throws {TypeError} Throws an error if either amount or conversionRate is not a number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
