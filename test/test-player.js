import assert from 'assert';
import Player from '../src/Player';
import Deck from '../src/Deck';
import Card from '../src/Card';

describe('Player', () => {
  describe('constructor', () => {
    const deck = new Deck();
    const p0 = new Player('playerOne');
    p0.populateHand(deck.half0);
    const p1 = new Player('playerTwo');
    p1.populateHand(deck.half1);

    it('is properly valid', () => {
      assert.equal(p0.countCards(), 26);
      assert.equal(p0.name, 'playerOne');
      assert.equal(p1.countCards(), 26);
      assert.equal(p1.name, 'playerTwo');
    });
  });

  describe('playCard', () => {
    const deck = new Deck();
    const p0 = new Player('playerOne');
    p0.populateHand(deck.half0);
    const currentHandCount = p0.countCards();
    p0.playCard();

    it('reduces card count and returns single card', () => {
      assert.equal(p0.countCards(), currentHandCount - 1);
    });
  });

  describe('playManyCards', () => {
    const deck = new Deck();
    const p0 = new Player('playerOne');
    p0.populateHand(deck.half0);
    const currentHandCount = p0.countCards();
    const manyCount = 3;
    const cards = p0.playManyCards(manyCount);
    it('reduces card count by x and returns Card[x]', () => {
      assert.equal(p0.countCards(), currentHandCount - manyCount);
    });

    it('returns an array of cards', () => {
      assert.equal(Array.isArray(cards), true);
      assert.equal(cards.length, manyCount);
    });
  });

  describe('getCard', () => {
    const deck = new Deck();
    const p0 = new Player('playerOne');
    p0.populateHand(deck.half0);
    const card = p0.playCard();
    assert(p0.countCards() === 25);
    p0.getCard(card);
    it('is able to get a new card', () => {
      assert.equal(p0.countCards(), 26);
    });
  });

  describe('getCards', () => {
    const p0 = new Player('playerOne');
    const arr = [new Card('A'), new Card('K'), new Card('T')];
    p0.getCards(arr);
    assert.equal(p0.countCards(), 3);
  });
});
