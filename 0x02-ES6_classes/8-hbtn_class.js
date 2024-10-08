export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // casting to Number
  valueOf() {
    return this._size;
  }

  // casting to string
  toString() {
    return this._location;
  }
}
