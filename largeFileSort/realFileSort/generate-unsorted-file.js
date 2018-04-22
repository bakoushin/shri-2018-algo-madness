const fs = require('fs');
const path = require('path');

const MAX = 1000000;

const filename = 'demo.txt';
const fileDescriptor = fs.openSync(path.join(__dirname, filename), 'w');

for (let i = 0; i < MAX; i++) {
  fs.writeSync(fileDescriptor, random(MAX) + '\n');
}

function random(max) {
  return Math.floor(Math.random() * max) + 1;
}

console.log(`Generated ${filename}`);
