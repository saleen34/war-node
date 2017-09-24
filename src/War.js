import Player from './Player';
import Deck from './Deck';
import Battle from './Battle';

class War {
  constructor () {
    this.id = 1;
    this.battles = {};
    this.battleCount = 0;
    this.maxBattles = 5000;
    this.player0 = new Player('playerOne');
    this.player1 = new Player('playerTwo');
    this.deck = new Deck();
    this.deal();
    this.winner = null;
    this.loser = null;
  }

  deal () {
    this.player0.populateHand(this.deck.half0);
    this.player1.populateHand(this.deck.half1);
  }

  startWar () {
    while (!this.warOver()) {
      this.runBattle();
    }
    this.setOutcome();
  }

  runBattle () {
    return new Promise((resolve, reject) => {
      const battle = new Battle(this.player0, this.player1);
      battle.fight();
      this.battleCount += 1;
      this.battles[this.battleCount] = battle.getOutcome();
      this.setOutcome();
      resolve(battle);
    });
  }

  setOutcome () {
    if (!this.player0.countCards()) {
      this.winner = this.player0;
      this.loser = this.player1;
    } else {
      this.winner = this.player1;
      this.loser = this.player0;
    }
  }

  warOver () {
    if (!this.player0.countCards() ||
        !this.player1.countCards()) {
      this.setOutcome();
      return true;
    }
    return true;
  }

  getWinner () {
    return this.winner;
  }

  getLoser () {
    return this.loser;
  }
}

export default War;
