const Board = require('./Board');

function eightQueens() {
  const BOARD_WIDTH = 8;
  const BOARD_HEIGHT = 8;
  const QUEENS_NUMBER = 8;

  let board = new Board(BOARD_WIDTH, BOARD_HEIGHT);

  for (let row = 0; row < BOARD_HEIGHT; row++) {
    for (let column = 0; column < BOARD_WIDTH; column++) {
      board.placeQueen(row, column);
      placeQueens(board);
      // let emptyCell = [row, column];
      // while(emptyCell) {
      //   const [row, column] = emptyCell;
      //   board.placeQueen(row, column);
      //   if (board.countQueens() === QUEENS_NUMBER) {
      //     return board;          
      //   }
      //   emptyCell = board.findEmptyCell();
      // }
      board.clear();
    }
  }

  function placeQueens(board) {
    const emptyCells = board.findEmptyCells();
    for (const emptyCell of emptyCells) {
      const [row, column] = emptyCell;
      const newBoard = Object.assign(new Board(), board);
      newBoard.placeQueen(row, column);
      if (newBoard.countQueens() === QUEENS_NUMBER) {
        console.log(board.toString());
        console.log('--------------')
      }
      placeQueens(newBoard);
    }

  }

  

  return null;
}

eightQueens();

module.exports = eightQueens;
