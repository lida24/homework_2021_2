'use strict';

/**
 *
 * This function finds gcd of 2 numbers
 *
 * @param {number} x - first number
 * @param {number} y - second number
 * @returns {number}
 */
const gcd = (x, y) =>
  x !== 0 ? gcd(y % x, x) : y;

/**
 * This function finds gcd of n numbers
 *
 * @param  {...number} numbers - n numbers
 * @returns {number}
 */
const euclid = (...numbers) => numbers.reduce((max, current) =>
    gcd(max, Math.abs(current)), 0);
