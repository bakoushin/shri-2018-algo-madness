const Board = require('./Board');

function eightQueens({verbose = false, max = undefined} = {}) {
  const BOARD_WIDTH = 8;
  const BOARD_HEIGHT = 8;
  const QUEENS_NUMBER = 8;

  let result = [];

  for (let column = 0; column < BOARD_WIDTH; column++) {
    let board = new Board(BOARD_WIDTH, BOARD_HEIGHT);
    board.placeQueen(0, column);
    placeQueens(board);

    if (max && max === result.length) {
      return result;
    }
  }

  function placeQueens(board) {
    const emptyCells = board.findEmptyCells();
    for (const emptyCell of emptyCells) {
      const [row, column] = emptyCell;
      const newBoard = board.clone();
      newBoard.placeQueen(row, column);
      if (newBoard.countQueens() === QUEENS_NUMBER) {
        const solution = newBoard.toString();
        if (!result.includes(solution)) {
          result.push(solution);

          if (verbose) {
            console.log(newBoard.toString());
            console.log('---------------', result.length);
          }
        }
      }
      placeQueens(newBoard);

      if (max && max === result.length) {
        return;
      }
    }
  }

  return result;
}

module.exports = eightQueens;
