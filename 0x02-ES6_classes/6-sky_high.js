import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter and settter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val !== 'number') {
      throw TypeError('sqft needs to be a number');
    }
    super._sqft = val;
  }

  // getter and setter for floor
  get floors() {
    return this._floors;
  }

  set floors(val) {
    if (typeof val !== 'number') {
      throw TypeError('floor needs to be a number');
    }
    this._floors = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
