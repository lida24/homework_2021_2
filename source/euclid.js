'use strict';

function gcd(x, y) {
  if (x !== 0) {
    return gcd(y % x, x);
  } else return y;
}

const euclid = (...numbers) => numbers.reduce(function (max, current) {
  return gcd(max, Math.abs(current));
}, 0);
