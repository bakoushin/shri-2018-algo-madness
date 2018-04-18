const Board = require('./Board');

function eightQueens() {
  const BOARD_WIDTH = 8;
  const BOARD_HEIGHT = 8;
  const QUEENS_NUMBER = 8;

  let board = new Board(BOARD_WIDTH, BOARD_HEIGHT);

  for (let row = 0; row < BOARD_HEIGHT; row++) {
    for (let column = 0; column < BOARD_WIDTH; column++) {
      let emptyCell = [row, column];
      while(emptyCell) {
        const [row, column] = emptyCell;
        board.placeQueen(row, column);
        if (board.countQueens() === QUEENS_NUMBER) {
          return board;          
        }
        emptyCell = board.findEmptyCell();
      }
      board.clear();
    }
  }

  return null;
}

module.exports = eightQueens;
