class Board {
  constructor(width = 8, height = 8) {
    this._QUEEN = 'Q';
    this._DANGER = 'x';
    this._EMPTY = '.';
    this._board = this._createBoard(width, height);
  }
  clear() {
    for (let row = 0; row < this._board.length; row++) {
      for (let column = 0; column < this._board[row].length; column++) {
        this._board[row][column] = this._EMPTY;
      }
    }
  }
  placeQueen(row, column) {
    this._board[row][column] = this._QUEEN;
    this._fillRow(row);
    this._fillColumn(column);
    this._fillDiagonals(row, column);
  }
  countQueens() {
    let count = 0;
    for (let row of this._board) {
      for (let column of row) {
        if (column === this._QUEEN) {
          count++;
        }
      }
    }
    return count;
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
  findEmptyCell() {
    for (let row = 0; row < this._board.length; row++) {
      for (let column = 0; column < this._board[row].length; column++) {
        if (this._board[row][column] === this._EMPTY) {
          return [row, column];
        }
      }
    }
    return null;
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
  _createBoard(width, height) {
    let board = [];
    for (let row = 0; row < height; row++) {
      let row = [];
      for (let column = 0; column < width; column++) {
        row.push(this._EMPTY);
      }
      board.push(row);
    }
    return board;
  }
}

module.exports = Board;
