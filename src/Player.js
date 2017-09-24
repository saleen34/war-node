import Card from './Card';
import Deck from './Deck';

class Player {
  constructor (name) {
    this.cards = [];
    this.name = name || null;
  }

  populateHand (arr) {
    this.cards = [];
    arr.forEach((value) => {
      this.getCard(new Card(value));
    });
  }

  getCard (card) {
    this.cards.push(card);
  }

  getCards (cards) {
    const randoms = Deck.randomizeArray(cards);
    randoms.forEach((card) => {
      this.getCard(card);
    });
  }

  countCards () {
    return this.cards.length;
  }

  playCard () {
    return this.cards.splice(0, 1)[0];
  }

  playManyCards (cnt) {
    const arr = [];
    for (let i = 0; i < cnt; i += 1) {
      arr.push(this.playCard());
    }
    return arr;
  }

  showCards () {
    const arr = [];
    this.cards.forEach((card) => {
      arr.push(card.getDisplay());
    });
    return arr;
  }
}

export default Player;
