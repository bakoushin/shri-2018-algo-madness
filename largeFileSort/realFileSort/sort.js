const fs = require('fs');
const path = require('path');
const File = require('./RealFile');
const largeFileSort = require('./largeFileSort');

const filename = process.argv[2];

if (!filename) {
  const scriptName = path.basename(__filename, path.extname(__filename));
  console.log(`\nUsage: node ${scriptName} <file>\n`);
  return;
}

const sortedFilename = largeFileSort(filename);

const fileExtname = path.extname(filename);
const fileBasename = path.basename(filename, fileExtname);
const newFilename = `${fileBasename}.sorted${fileExtname}`;

fs.renameSync(path.join(__dirname, sortedFilename), 
  path.join(__dirname, newFilename));

console.log(`Sort finished. Output: ${newFilename}`);
