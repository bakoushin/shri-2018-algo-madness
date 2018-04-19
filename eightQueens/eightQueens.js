const Board = require('./Board');

function eightQueens(verbose = false) {
  const BOARD_WIDTH = 8;
  const BOARD_HEIGHT = 8;
  const QUEENS_NUMBER = 8;

  let result = [];

  for (let column = 0; column < BOARD_WIDTH; column++) {
    let board = new Board(BOARD_WIDTH, BOARD_HEIGHT);
    board.placeQueen(0, column);
    placeQueens(board);
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
    }
  }

  return result;
}

function timer(start) {
  if (!start) return process.hrtime();
  const result = process.hrtime(start);
  return Math.round(result[0] + result[1] / 1000000000);
}
const start = timer();

eightQueens();

const diff = timer(start);
const min = Math.floor(diff / 60);
const sec = Math.round(diff % 60);
console.log(`Total time: ${min} min ${sec} sec`);

module.exports = eightQueens;
