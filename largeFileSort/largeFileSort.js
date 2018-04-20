const File = require('./File');

function largeFileSort(file) {
  let chunkSize = 1;
  let tempFiles = split(file, chunkSize);
  while (tempFiles.length == 2) {
    file = merge(...tempFiles, chunkSize);
    chunkSize *= 2;
    tempFiles = split(file, chunkSize);
  }
  return file;
}

function split(file, chunkSize) {
  let tmpFile1 = new File();
  let tmpFile2 = new File();
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
    return [tmpFile1, tmpFile2];
  } else {
    return [tmpFile1];
  }
}

function merge(file1, file2, chunkSize) {
  let tmpFile = new File();
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
      if (compareLines(line1, line2) <= 0) {
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
      }
      line1 = file1.readLine();
      counter1++;
    }
    while (counter2 <= chunkSize) {
      if (line2 !== null) {
        tmpFile.writeLine(line2);
      }
      line2 = file2.readLine();
      counter2++;
    }
    if (line1 == null && line2 == null) {
      finished = true;
    }
  }
  return tmpFile;
}

function compareLines(line1, line2) {
  const a = parseInt(line1);
  const b = parseInt(line2);
  return a - b;
}

module.exports = largeFileSort;
