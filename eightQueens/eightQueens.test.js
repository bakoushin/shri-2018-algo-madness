const {expect} = require('chai');
const eightQueens = require('./eightQueens');

const referenceBoard = 
`x Q x x x x x x
x x x Q x x x x
x x x x x Q x x
x x x x x x x Q
x x Q x x x x x
Q x x x x x x x
x x x x x x Q x
x x x x Q x x x`;

describe('Eight queens', () => {

  const board = eightQueens();

  it('Board should have 8 queens not endangered by each other', () => {
    expect(board.toString()).to.be.equal(referenceBoard);
  });

  it('Queens count should be 8', () => {
    expect(board.countQueens()).to.be.equal(8);
  });
  
});
