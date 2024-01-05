import Car from './10-car';

/**
 * Represents an Electric Vehicle (EV) with extended properties.
 * @class
 * @extends Car
 */
export default class EVCar extends Car {
  /**
   * Creates a new instance of the EVCar class.
   * @constructor
   * @param {string} brand - The brand of the EV car.
   * @param {string} motor - The type of motor in the EV car.
   * @param {string} color - The color of the EV car.
   * @param {number} range - The range of the EV car in miles.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Gets the range of the EV car.
   * @returns {number} The range of the EV car in miles.
   */
  get range() {
    return this._range;
  }

  /**
   * Sets the range of the EV car.
   * @param {number} value - The new range value.
   */
  set range(value) {
    this._range = value;
  }

  /**
   * Overrides the cloneCar method to create a new instance of the specific class.
   * @returns {EVCar} A new instance of the EVCar class.
   */
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
