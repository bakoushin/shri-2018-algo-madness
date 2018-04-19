const {expect} = require('chai');
const eightQueens = require('./eightQueens');

const referenceBoard = 
`Q x x x x x x x
x x x x Q x x x
x x x x x x x Q
x x x x x Q x x
x x Q x x x x x
x x x x x x Q x
x Q x x x x x x
x x x Q x x x x`;

describe('Eight queens', () => {

  const board = eightQueens({max: 1})[0].toString();

  it('Board should have 8 queens not endangered by each other', () => {
    expect(board).to.be.equal(referenceBoard);
  });
  
});
