class File {
  constructor(array) {
    if (array) {
      this.data = [...array];
    } else {
      this.data = [];
    }
    this.pointer = 0;
  }
  readLine() {
    if (this.pointer > this.data.length - 1) {
      return null;
    }
    const value = this.data[this.pointer];
    this.pointer++;
    return value;
  }
  writeLine(value) {
    this.data.push(value);
  }
  toArray() {
    return [...this.data];
  }
}

module.exports = File;
