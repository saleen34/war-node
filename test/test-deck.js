import assert from 'assert';
import Deck from '../src/Deck';

describe('Deck', () => {
  describe('randomizeArray', () => {
    it('should return an array of equal length', () => {
      const arr = [1, 2, 3, 4, 5, 6];
      assert(Deck.randomizeArray(arr).length === arr.length);
    });
  });

  describe('generateDeck', () => {
    it('should return an array of 52', () => {
      assert.equal(Deck.generateDeck().length, 52);
    });
  });

  describe('fillHalfDecks', () => {
    it('should populate two arrays of 26', () => {
      const deck = new Deck();
      assert.equal(deck.half0.length, 26);
      assert.equal(deck.half1.length, 26);
    });
  });
});
