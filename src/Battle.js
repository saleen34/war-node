class Battle {
  constructor (player0, player1) {
    this.player0 = player0;
    this.player1 = player1;
    this.winner = null;
    this.loser = null;
    this.ties = [];
  }

  fight () {
    this.drawCards();
  }

  tie (c0, c1) {
    this.ties.push(c0);
    this.ties.push(c1);
    const faceDown0 = this.player0.playCard();
    const faceDown1 = this.player1.playCard();

    if (!faceDown0) {
      this.setOutcome(this.player1, this.player0);
      return;
    }

    this.ties.push(faceDown0);

    if (!faceDown1) {
      this.setOutcome(this.player0, this.player1);
      return;
    }

    this.ties.push(faceDown1);

    const deciding0 = this.player0.playCard();
    const deciding1 = this.player1.playCard();

    if (!deciding0) {
      this.setOutcome(this.player1, this.player0);
      return;
    }

    this.ties.push(deciding0);

    if (!deciding1) {
      this.setOutcome(this.player0, this.player1);
      return;
    }

    this.ties.push(deciding1);

    if (deciding0.getValue() === deciding1.getValue()) {
      this.tie(deciding0, deciding1);
    } else if (deciding0.getValue() > deciding1.getValue()) {
      this.setOutcome(this.player0, this.player1);
      this.player0.getCards(this.ties);
      this.resetTies();
    } else {
      this.setOutcome(this.player1, this.player0);
      this.player1.getCards(this.ties);
      this.resetTies();
    }
  }

  resetTies () {
    this.ties = [];
  }

  drawCards () {
    const c0 = this.player0.playCard();
    const c1 = this.player1.playCard();

    if (!c0) {
      this.setOutcome(this.player0, this.player1);
    }

    if (!c1) {
      this.setOutcome(this.player1, this.player0);
    }

    if (c0.getValue() === c1.getValue()) {
      this.tie(c0, c1);
    } else if (c0.getValue() > c1.getValue()) {
      this.setOutcome(this.player0, this.player1);
      this.player0.getCards([c0, c1]);
    } else {
      this.setOutcome(this.player1, this.player0);
      this.player1.getCards([c0, c1]);
    }
  }

  setOutcome (winner, loser) {
    this.winner = winner;
    this.loser = loser;
  }

  getOutcome () {
    return {
      winner: this.winner,
      loser: this.loser
    };
  }

  getWinner () {
    return this.winner;
  }

  getLoser () {
    return this.loser;
  }
}

export default Battle;
