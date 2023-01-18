const riverSizes = require('./challenge');
const assert = require('assert');

describe('RiverSizes', () => { 
  it('should return [1, 1, 2, 2, 4, 5]', () => {
    const river = [
      [1, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 1, 0],
      [1, 0, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1, 0],
    ];

    assert.deepEqual(riverSizes(river).sort((a, b) => a - b), [1, 1, 2, 2, 4, 5]);
  });

  it('should return [1, 2, 7]', () => {
    const river = [
      [1, 0, 1, 1],
      [0, 1, 1, 0],
      [1, 0, 1, 0],
      [1, 0, 1, 1],
    ];

    assert.deepEqual(riverSizes(river).sort((a, b) => a - b), [1, 2, 7]);
  });

  it('should return [2, 2, 2, 3, 4, 5, 5, 11]', () => {
    const river = [
      [0, 0, 1, 1, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 0, 1],
      [0, 0, 1, 0, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 1],
    ];

    assert.deepEqual(riverSizes(river).sort((a, b) => a - b), [2, 2, 2, 3, 4, 5, 5, 11]);
  });
})