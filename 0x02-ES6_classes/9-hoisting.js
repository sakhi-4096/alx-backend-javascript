/**
 * Represents a HolbertonClass with year and location information.
 * @class
 */
export class HolbertonClass {
  /**
   * Creates a new instance of the HolbertonClass class.
   * @constructor
   * @param {number} year - The year of the HolbertonClass.
   * @param {string} location - The location of the HolbertonClass.
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Gets the year of the HolbertonClass.
   * @returns {number} The year of the HolbertonClass.
   */
  get year() {
    return this._year;
  }

  /**
   * Gets the location of the HolbertonClass.
   * @returns {string} The location of the HolbertonClass.
   */
  get location() {
    return this._location;
  }
}

/**
 * Represents a StudentHolberton with first name, last name, and associated HolbertonClass.
 * @class
 */
export class StudentHolberton {
  /**
   * Creates a new instance of the StudentHolberton class.
   * @constructor
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {HolbertonClass} holbertonClass - The associated HolbertonClass of the student.
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Gets the full name of the student.
   * @returns {string} The full name of the student.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Gets the associated HolbertonClass of the student.
   * @returns {HolbertonClass} The associated HolbertonClass of the student.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Gets the full description of the student, including name, year, and location.
   * @returns {string} The full description of the student.
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - \
${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// List of students
const listOfStudents = [student1, student2, student3, student4, student5];

// Export the list of students
export default listOfStudents;
