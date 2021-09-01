'use strict';

QUnit.module('Тестируем функцию euclid', function () {
  QUnit.test('На входе всего одно число', function (assert) {
    assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
    assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
    assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
    assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
  });

  QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
    assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
    assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
    assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
    assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
    assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
    assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
    assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
    assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
  });

  QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
    assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

    const n = 17;
    assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

    const temp = [80325, 55275, 8746650, 3000000, 45672375, 225, 54675];
    assert.strictEqual(euclid(...[...temp, ...temp, ...temp, ...temp, ...temp]), euclid(...temp));
  });

  QUnit.test
  ('Функция должна работать правильно как с отрицательными, так и с положительными числами',
  function (assert) {
    assert.strictEqual(euclid(-1, 1), 1, 'euclid(-1, 1) === 1');
    assert.strictEqual(euclid(-3, 9), 3, 'euclid(-1, 1) === 3');
    assert.strictEqual(euclid(-7, 49), 7, 'euclid(-7, 49) === 7');
  });

  QUnit.test('Функция должна работать правильно с двуми отрицательными числами', function (assert) {
        assert.strictEqual(euclid(-1, -1), 1, 'euclid(-1, -1) === 1');
        assert.strictEqual(euclid(-8, -2), 2, 'euclid(-8, -2) === 2');
        assert.strictEqual(euclid(-10, -120), 10, 'euclid(-10, -120) === 10');
      });
});