class Deck {
  constructor () {
    this.half0 = [];
    this.half1 = [];
    this.fillHalfDecks();
  }

  static randomizeArray (arr) {
    const newArr = arr;
    for (let i = 0; i < arr.length; i += 1) {
      const j = Math.floor((Math.random() * (i + 1)));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  static generateDeck () {
    const partialDeck = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    const deck = partialDeck
      .concat(partialDeck)
      .concat(partialDeck)
      .concat(partialDeck);
    return Deck.randomizeArray(deck);
  }

  fillHalfDecks () {
    const fullDeck = Deck.generateDeck();
    for (let i = 0; i < fullDeck.length; i += 1) {
      if ((i % 2) === 0) {
        this.half0.push(fullDeck[i]);
      } else {
        this.half1.push(fullDeck[i]);
      }
    }
  }
}

export default Deck;
