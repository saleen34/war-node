import assert from 'assert';
import Card from '../src/Card';

describe('Card', () => {
  const value = 14;

  it('should be properly constructed', () => {
    const card = new Card(value);
    assert.equal(card.getValue(), value);
  });

  it('should be able to display face value', () => {
    const card = new Card(value);
    assert.equal(card.getDisplay(value), 'A');
  });
});
