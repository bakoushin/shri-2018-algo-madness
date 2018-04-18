padStart = require('string.prototype.padstart');

class Spiral {
  constructor(n) {
    this._MAX_INDEX = n - 1;
    this._MAX_NUMBER = n * n;
    this._PAD_LENGTH = String(this._MAX_NUMBER).length;
    this._counter = 1;
    this._init(n);
    if (n > 0) {
      this._goRight(0, 0);
    }
  }
  toString() {
    let canvasString = '';
    for (const row of this._canvas) {
      let rowString = '';
      for (const col of row) {
        rowString += rowString.length > 0 
          ? ' ' 
          : '';
        rowString += padStart(col, this._PAD_LENGTH, ' ');
      }
      canvasString += canvasString.length > 0 
        ? '\n' 
        : '';
      canvasString += rowString;
    }
    return canvasString;
  }
  _setNumber(row, col) {
    this._canvas[row][col] = this._counter;
    this._counter++;
    return this._counter <= this._MAX_NUMBER;
  }
  _goRight(row, col) {
    if (this._isUnavailable(row, col)) {
      this._goDown(row + 1, col - 1);
      return;
    }
    if (this._setNumber(row, col)) {
      this._goRight(row, col + 1);
    }
  }
  _goDown(row, col) {
    if (this._isUnavailable(row, col)) {
      this._goLeft(row - 1, col - 1);
      return;
    }
    if (this._setNumber(row, col)) {
      this._goDown(row + 1, col);
    }
  }
  _goLeft(row, col) {
    if (this._isUnavailable(row, col)) {
      this._goUp(row - 1, col + 1);
      return;
    }
    if (this._setNumber(row, col)) {
      this._goLeft(row, col - 1);
    }
  }
  _goUp(row, col) {
    if (this._isUnavailable(row, col)) {
      this._goRight(row + 1, col + 1);
      return;
    }
    if (this._setNumber(row, col)) {
      this._goUp(row - 1, col);
    }
  }
  _isUnavailable(row, col) {
    return row < 0 || row > this._MAX_INDEX ||
      col < 0 || col > this._MAX_INDEX ||
      this._canvas[row][col]; 
  }
  _init(sideWidth) {
    this._canvas = [];
    for (let row = 0; row < sideWidth; row++) {
      const rowArray = [];
      for (let column = 0; column < sideWidth; column++) {
        rowArray.push(0);
      }
      this._canvas.push(rowArray);
    }
  }
}

module.exports = Spiral;

spiral = new Spiral(4);
console.log(spiral.toString());
