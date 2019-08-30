/**
 * @param {function(a: *, b: *)} [compareFunction] - It may be custom compare function that, let's
 * say may compare custom objects together.
 */
function Comparator(compareFunction) {
  this.compare = compareFunction || Comparator.defaultCompareFunction;
}

/**
 * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
 * @param {(string|number)} a
 * @param {(string|number)} b
 * @returns {number}
 */
Comparator.defaultCompareFunction = function(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
};

/**
 * Checks if two variables are equal.
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
Comparator.prototype.equal = function(a, b) {
  return this.compare(a, b) === 0;
};

/**
 * Checks if variable "a" is less than "b".
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
Comparator.prototype.lessThan = function(a, b) {
  return this.compare(a, b) < 0;
};

/**
 * Checks if variable "a" is greater than "b".
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
Comparator.prototype.greaterThan = function(a, b) {
  return this.compare(a, b) > 0;
};

/**
 * Checks if variable "a" is less than or equal to "b".
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
Comparator.prototype.lessThanOrEqual = function(a, b) {
  return this.lessThan(a, b) || this.equal(a, b);
};

Comparator.prototype.greaterThanOrEqual = function(a, b) {
  return this.greaterThan(a, b) || this.equal(a, b);
};

/**
 * Reverses the comparison order.
 * Save the ref to one variable and call it by passing reverse
 */
Comparator.prototype.reverse = function() {
  const compareOriginal = this.compare;
  this.compare = (a, b) => compareOriginal(b, a);
};

export default Comparator;
