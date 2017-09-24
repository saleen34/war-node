import assert from 'assert';
import War from '../src/War';
import Player from '../src/Player';

describe('War', () => {
  describe('construtor', () => {
    it('creates two players', () => {
      const war = new War();
      assert(war.player0 instanceof Player);
      assert(war.player1 instanceof Player);
    });

    it('creates a deck of 52', () => {
      const war = new War();
      assert.equal(war.deck.half0.length + war.deck.half1.length, 52);
    });
  });

  describe('Deal', () => {
    it('gives each player 26 cards', () => {
      const war = new War();
      assert.equal(war.player0.cards.length, 26);
      assert.equal(war.player1.cards.length, 26);
    });
  });

  describe('startWar', () => {
    it('provides the correct winner and loser', () => {
      const war = new War();
      war.startWar();
      assert(war.getWinner() instanceof Player);
      assert(war.getLoser() instanceof Player);
    });
  });
});
