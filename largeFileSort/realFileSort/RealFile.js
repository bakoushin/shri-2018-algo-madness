const fs = require('fs');
const path = require('path');

class File {
  constructor(filename) {
    this._BUFFER_SIZE = 1024;
    this._buffer = new Buffer(this._BUFFER_SIZE);
    this._filename = path.join(__dirname, filename);
    this._data = '';
  }
  readLine() {
    if (!this._fileDescriptor) {
      this._fileDescriptor = fs.openSync(this._filename, 'r');
    }
    const line = this._getLine();
    if (line) {
      return line;
    } else {
      let chunkSize = this._readChunk();
      while (chunkSize !== 0) {
        this._data += this._buffer.toString('utf8', 0, chunkSize);
        const line = this._getLine();
        if (line) {
          return line;
        }        
        chunkSize = this._readChunk();
      }
      if (this._data.length > 0) {
        const line = this._data + '\n';
        this._data = '';
        return line;
      }
    }
    return null;
  }
  writeLine(value) {
    if (!this._fileDescriptor) {
      this._fileDescriptor = fs.openSync(this._filename, 'w');
    }
    fs.writeSync(this._fileDescriptor, value);
  }
  getFullPath() {
    return this._filename;
  }
  _getLine() {
    const newLineIndex = this._data.indexOf('\n');      
    if (newLineIndex !== -1) {
      const line = this._data.slice(0, newLineIndex + 1);
      this._data = this._data.slice(newLineIndex + 1);
      return line;
    }
    return '';
  }
  _readChunk() {
    return fs.readSync(this._fileDescriptor, this._buffer, 0, this._BUFFER_SIZE, null);
  }
}

module.exports = File;
