export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }
  /**
   * get the name of the course
   */
  get name() {
    return this._name;
  }
  /**
   * set the name of the course
   */
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = value;
  }
  /**
   * get the length of the course
   */
  get length() {
    return this._length;
  }
  /**
   * set the length of the course
   */
  set length(value) {
    if (typeof value !== "Number") {
      throw new TypeError("length must be a Number");
    }
    this._length = value;
  }
  /**
   * get the students of the course
   */
  get students() {
    return this._students;
  }
  /**
   * set the students of the course
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError("Students must be an array of strings");
    }
    if (!value.every((student) => typeof student === "string")) {
      throw new TypeError("Students must be an array of strings");
    }
    this._students = value;
  }
}
