import War from './War';

class Game {
  constructor () {
    this.warCount = 0;
    this.wars = {};
  }

  getWar (id) {
    return this.wars[id] || null;
  }

  createWar () {
    this.wars[this.warCount + 1] = new War();
    this.warCount += 1;
    return this.warCount;
  }
}

export default Game;
