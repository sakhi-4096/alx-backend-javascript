/**
 * Represents a class room.
 * @class
 */
export default class ClassRoom {
  /**
   * Creates a new instance of the ClassRoom class.
   * @constructor
   * @param {number} maxStudentsSize - The maximum number of students in the class.
   */
  constructor(maxStudentsSize) {
    /**
     * The maximum number of students in the class.
     * @type {number}
     * @private
     */
    this._maxStudentsSize = maxStudentsSize;
  }
}
