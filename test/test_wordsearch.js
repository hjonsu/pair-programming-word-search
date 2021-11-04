const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function () {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'D', 'E', 'L', 'D'],
      ['Y', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'F', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'L', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally", function () {
    const result = wordSearch([
      ['S', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'Y', 'D', 'E', 'L', 'D'],
      ['Y', 'I', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['W', 'F', 'C', 'S', 'F', 'E', 'R', 'L'],
      ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'D', 'T', 'W', 'A', 'P', 'L', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'D'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards", function () {
    const result = wordSearch([
      ['A', 'D', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'L', 'I', 'N', 'D', 'E', 'L', 'D'],
      ['Y', 'E', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'F', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'N', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'I', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'S', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally top right bottom left", function () {
    const result = wordSearch([
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'S'],
      ['A', 'B', 'C', 'D', 'E', 'F', 'E', 'H'],
      ['A', 'B', 'C', 'D', 'E', 'I', 'G', 'H'],
      ['A', 'B', 'C', 'D', 'N', 'F', 'G', 'H'],
      ['A', 'B', 'C', 'F', 'E', 'F', 'G', 'H'],
      ['A', 'B', 'E', 'D', 'E', 'F', 'G', 'H'],
      ['A', 'L', 'C', 'D', 'E', 'F', 'G', 'H'],
      ['D', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally bottom left top right", function () {
    const result = wordSearch([
      ['S', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'S', 'I', 'Y', 'D', 'E', 'L', 'D'],
      ['Y', 'I', 'I', 'F', 'Q', 'U', 'L', 'L'],
      ['H', 'N', 'J', 'N', 'E', 'E', 'R', 'G'],
      ['W', 'F', 'C', 'S', 'F', 'E', 'R', 'L'],
      ['B', 'E', 'R', 'N', 'N', 'E', 'Y', 'B'],
      ['U', 'D', 'I', 'W', 'A', 'P', 'L', 'I'],
      ['O', 'E', 'C', 'A', 'K', 'U', 'A', 'D'],
      ['S', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
});