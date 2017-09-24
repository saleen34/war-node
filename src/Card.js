class Card {
  constructor (value) {
    this.value = value || null;
    this.mapping = {
      14: 'A',
      13: 'K',
      12: 'Q',
      11: 'J',
      10: 'T',
      9: '9',
      8: '8',
      7: '7',
      6: '6',
      5: '5',
      4: '4',
      3: '3',
      2: '2'
    };
  }

  getDisplay () {
    return this.mapping[this.value] || null;
  }

  getValue () {
    return this.value;
  }
}

export default Card;
