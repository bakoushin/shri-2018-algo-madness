const fs = require('fs');
const path = require('path');
const File = require('./RealFile');

function largeFileSort(filename) {
  let chunkSize = 1;
  let tempFilenames = split(filename, chunkSize);
  while (tempFilenames.length === 2) {
    filename = merge(...tempFilenames, chunkSize);
    chunkSize *= 2;
    tempFilenames = split(filename, chunkSize);
  }
  fs.unlink(path.join(__dirname, tempFilenames[0]));
  return filename;
}

function split(filename, chunkSize) {
  const file = new File(filename);
  const tmpFilename1 = '.tmp1';
  const tmpFilename2 = '.tmp2';
  const tmpFile1 = new File(tmpFilename1);
  const tmpFile2 = new File(tmpFilename2);
  let tmpFile = tmpFile1;
  let splitted = false;
  let counter = 0;
  let line = file.readLine();
  while (line !== null) {
    counter++;
    if (counter > chunkSize) {
      counter = 1;
      tmpFile = tmpFile === tmpFile1 ? tmpFile2 : tmpFile1;
      splitted = true;
    }
    tmpFile.writeLine(line);
    line = file.readLine(line);
  }
  if (splitted) {
    return [tmpFilename1, tmpFilename2];
  } else {
    return [tmpFilename1];
  }
}

function merge(filename1, filename2, chunkSize) {
  const filename = '.tmp0';
  const tmpFile = new File(filename);
  const file1 = new File(filename1);
  const file2 = new File(filename2);
  let finished = false;
  let line1 = file1.readLine();
  let line2 = file2.readLine();
  while(!finished) {
    let counter1 = 1;
    let counter2 = 1;
    while(
      line1 !== null && 
      line2 !== null &&
      counter1 <= chunkSize && 
      counter2 <= chunkSize
    ) {
      if (compare(line1, line2) <= 0) {
        tmpFile.writeLine(line1);
        line1 = file1.readLine();
        counter1++;
      } else {
        tmpFile.writeLine(line2);
        line2 = file2.readLine();
        counter2++;
      }
    }
    while (counter1 <= chunkSize) {
      if (line1 !== null) {
        tmpFile.writeLine(line1);
        line1 = file1.readLine();
      }
      counter1++;
    }
    while (counter2 <= chunkSize) {
      if (line2 !== null) {
        tmpFile.writeLine(line2);
        line2 = file2.readLine();
      }
      counter2++;
    }
    if (line1 === null && line2 === null) {
      finished = true;
    }
  }
  fs.unlink(file1.getFullPath());
  fs.unlink(file2.getFullPath());
  return filename;
}

function compare(line1, line2) {
  const a = parseInt(line1);
  const b = parseInt(line2);
  return a - b;
}

module.exports = largeFileSort;
