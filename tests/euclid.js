
QUnit.module('Тестируем функцию euclid', function () {
  QUnit.test('Работает правильно с одним числом', function (assert) {
    assert.strictEqual(euclid(34), 34, 'euclid(34) === 34');
    assert.strictEqual(euclid(175), 175, 'euclid(175) === 175');
    assert.strictEqual(euclid(1024), 1024, 'euclid(1024) === 1024');
    assert.strictEqual(euclid(12580), 12580, 'euclid(6006) === 6006');
  });

  QUnit.test('Работает правильно с тремя числами', function (assert) {
    assert.strictEqual(euclid(17, 34, 1), 1, 'euclid(17, 34, 1) === 1');
    assert.strictEqual(euclid(13, 13, 13), 13, 'euclid(13, 13, 13 === 13');
    assert.strictEqual(euclid(54, 6, 9), 3, 'euclid(54, 6, 9) === 3');
    assert.strictEqual(euclid(8, 10, 15), 1, 'euclid(8, 10, 15) === 1');
    assert.strictEqual(euclid(128, 2, 64), 2, 'euclid(128, 2, 64) === 2');
    assert.strictEqual(euclid(55, 11, 77), 11, 'euclid(55, 11, 77) === 11');
    assert.strictEqual(euclid(21, 49, 56), 7, 'euclid(21, 49, 56) === 7');
    assert.strictEqual(euclid(12580, 150960, 239020), 12580,
    'euclid(12580, 150960, 239020) === 12580');
  });

  QUnit.test('Работает правильно с любым количеством чисел', function (assert) {
    assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);
    const n = 23;
    assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);
    const tmp = [559099, 4689920, 850927256464, 57433476879, 1234567, 234567890, 9856257836259];
    assert.strictEqual(euclid(...[...tmp, ...tmp, ...tmp, ...tmp, ...tmp]), euclid(...tmp));
  });

  QUnit.test('Работает правильно как с отрицательными, так и с положительными числами',
   function (assert) {
    assert.strictEqual(euclid(-1, 1), 1, 'euclid(-1, 1) === 1');
    assert.strictEqual(euclid(-3, 9), 3, 'euclid(-1, 1) === 3');
    assert.strictEqual(euclid(-7, 49), 7, 'euclid(-7, 49) === 7');
  });
});
