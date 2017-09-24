import assert from 'assert';
import Battle from '../src/Battle';
import Player from '../src/Player';
import Deck from '../src/Deck';

describe('Battle', () => {
  describe('constructor', () => {
    it('should create two players', () => {
      const deck = new Deck();
      const p0 = new Player('playerOne');
      p0.populateHand(deck.half0);
      const p1 = new Player('playerTwo');
      p1.populateHand(deck.half1);

      const battle = new Battle(p0, p1);
      assert(battle.player0 instanceof Player);
      assert(battle.player1 instanceof Player);
    });
  });

  describe('drawCards', () => {
    it('should modify player card stacks', () => {
      const deck = new Deck();

      const p0 = new Player('playerOne');
      p0.populateHand(deck.half0);

      const p1 = new Player('playerTwo');
      p1.populateHand(deck.half1);

      // get last element in cards to pretend to pop it
      const val0 = p0.cards[p0.cards.length - 1].value;
      const val1 = p1.cards[p1.cards.length - 1].value;

      const battle = new Battle(p0, p1);
      battle.fight();

      if (val0 > val1) {
        assert.equal(p0.countCards(), 27);
        assert.equal(p1.countCards(), 25);
      } else if (val1 > val0) {
        assert.equal(p1.countCards(), 27);
        assert.equal(p0.countCards(), 25);
      } else {
        console.log('tbd');
      }
    });

    it('should produce a winner and loser', () => {
      const deck = new Deck();

      const p0 = new Player('playerOne');
      p0.populateHand(deck.half0);

      const p1 = new Player('playerTwo');
      p1.populateHand(deck.half1);

      // get last element in cards to pretend to pop it
      const val0 = p0.cards[p0.cards.length - 1].value;
      const val1 = p1.cards[p1.cards.length - 1].value;

      const battle = new Battle(p0, p1);
      battle.fight();

      if (val0 > val1) {
        assert.equal(battle.getWinner().name, 'playerOne');
        assert.equal(battle.getLoser().name, 'playerTwo');
      } else if (val1 > val0) {
        assert.equal(battle.getWinner().name, 'playerTwo');
        assert.equal(battle.getLoser().name, 'playerOne');
      } else {
        // tbd
        console.log('tbd');
      }
    });
  });
});
