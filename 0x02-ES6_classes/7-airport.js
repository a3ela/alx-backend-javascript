export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // setter and getter for name

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  // setter and getter for code
  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  // symbol for the class
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
