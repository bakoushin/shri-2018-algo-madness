class Board {
  constructor(width = 8, height = 8) {
    this._QUEEN = 'Q';
    this._DANGER = 'x';
    this._EMPTY = '.';
    this._boardInit(width, height);
    this._queenCounter = 0;
  }
  placeQueen(row, column) {
    this._board[row][column] = this._QUEEN;
    this._fillRow(row);
    this._fillColumn(column);
    this._fillDiagonals(row, column);
    this._queenCounter++;
  }
  countQueens() {
    return this._queenCounter;
  }
  findEmptyCells() {
    let emptyCells = [];
    for (let row = 0; row < this._board.length; row++) {
      for (let column = 0; column < this._board[row].length; column++) {
        if (this._board[row][column] === this._EMPTY) {
          emptyCells.push([row, column]);
        }
      }
    }
    return emptyCells;
  }
  clone() {
    let newBoard = Object.assign(new Board(), this);
    newBoard._board = [];
    for (const row of this._board) {
      let newRow = [];
      for (const column of row) {
        newRow.push(column);
      }
      newBoard._board.push(newRow);
    }
    return newBoard;
  }
  toString() {
    let boardString = '';
    for (const row of this._board) {
      let rowString = '';
      for (const column of row) {
        rowString += column + ' ';
      }
      boardString += boardString.length > 0 
        ? '\n' 
        : '';
      boardString += rowString.trim();
    }
    return boardString;
  }
  _fillRow(row){
    for (let column = 0; column < this._board[row].length; column++) {
      if (this._board[row][column] === this._EMPTY) {
        this._board[row][column] = this._DANGER;
      }
    }
  }
  _fillColumn(column){
    for (let row = 0; row < this._board.length; row++) {
      if (this._board[row][column] === this._EMPTY) {
        this._board[row][column] = this._DANGER;
      }
    }
  }
  _fillDiagonals(row, column) {
    this._fillNorthWest(row, column);
    this._fillNorthEast(row, column);
    this._fillSouthWest(row, column);
    this._fillSouthEast(row, column);
  } 
  _fillNorthWest(row, column) {
    if (this._isOutOfRange(row, column)) {
      return;
    }
    if (this._board[row][column] === this._EMPTY) {
      this._board[row][column] = this._DANGER;
    }
    this._fillNorthWest(row - 1, column - 1);
  }
  _fillNorthEast(row, column) {
    if (this._isOutOfRange(row, column)) {
      return;
    }
    if (this._board[row][column] === this._EMPTY) {
      this._board[row][column] = this._DANGER;
    }
    this._fillNorthEast(row - 1, column + 1);
  }
  _fillSouthWest(row, column) {
    if (this._isOutOfRange(row, column)) {
      return;
    }
    if (this._board[row][column] === this._EMPTY) {
      this._board[row][column] = this._DANGER;
    }
    this._fillSouthWest(row + 1, column - 1);
  }
  _fillSouthEast(row, column) {
    if (this._isOutOfRange(row, column)) {
      return;
    }
    if (this._board[row][column] === this._EMPTY) {
      this._board[row][column] = this._DANGER;
    }
    this._fillSouthEast(row + 1, column + 1);
  }
  _isOutOfRange(row, column) {
    const rowIsOutOfRange = row < 0 || row > this._board.length - 1;
    if (rowIsOutOfRange) {
      return rowIsOutOfRange;
    } else {
      const columnIsOutOfRange = column < 0 || column > this._board[row].length - 1;
      return columnIsOutOfRange;
    }
  }
  _boardInit(width, height) {
    this._board = [];
    for (let row = 0; row < height; row++) {
      let row = [];
      for (let column = 0; column < width; column++) {
        row.push(this._EMPTY);
      }
      this._board.push(row);
    }
  }
}

module.exports = Board;
