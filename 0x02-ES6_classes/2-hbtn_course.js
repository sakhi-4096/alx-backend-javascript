/**
 * Represents a Holberton Project.
 * @class
 */
export default class HolbertonProject {
  /**
   * Creates a new instance of the HolbertonProject class.
   * @constructor
   * @param {string} name - The name of the project.
   * @param {number} duration - The duration of the project (in days).
   * @param {string[]} contributors - The names of contributors to the project.
   */
  constructor(name, duration, contributors) {
    this.name = name;
    this.duration = duration;
    this.contributors = contributors;
  }

  /**
   * Gets the name of this project.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this project.
   * @param {string} value - The new name value.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the duration of this project (in days).
   */
  get duration() {
    return this._duration;
  }

  /**
   * Sets the duration of this project (in days).
   * @param {number} value - The new duration value.
   */
  set duration(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._duration = value;
  }

  /**
   * Gets the names of contributors to this project.
   */
  get contributors() {
    return this._contributors;
  }

  /**
   * Sets the names of contributors to this project.
   * @param {string[]} value - The new contributors value.
   */
  set contributors(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((contributor) => typeof contributor === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._contributors = value;
  }
}
