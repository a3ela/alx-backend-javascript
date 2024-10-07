import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    this._currency = val;
  }

  displayFullPrice() {
    return ` ${this._amount} ${this._currency._name} (${this._currency._code})`;
  }
  static convertPrice(amount, conversionRate) {
    if (typeof amount && typeof conversionRate !== 'number')
      throw new TypeError('arguments needs to be Numbers');
    return amount * conversionRate;
  }
}
