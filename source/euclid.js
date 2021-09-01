'use strict';

/**
 *
 * This function finds gcd of 2 numbers
 *
 * @param {number} x - first number
 * @param {number} y - second number
 * @returns {number}
 */
function gcd(x, y) {
  if (x !== 0) {
    return gcd(y % x, x);
  } else return y;
}

/**
 * This function finds gcd of 2 numbers
 *
 * @param  {...number} numbers - n numbers
 * @returns {number}
 */
const euclid = (...numbers) => numbers.reduce(function (max, current) {
  return gcd(max, Math.abs(current));
}, 0);
