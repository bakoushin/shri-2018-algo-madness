const eightQueens = require('./eightQueens');

function timer(start) {
  if (!start) return process.hrtime();
  const result = process.hrtime(start);
  return Math.round(result[0] + result[1] / 1000000000);
}
const start = timer();

eightQueens({verbose: true});

const diff = timer(start);
const min = Math.floor(diff / 60);
const sec = Math.round(diff % 60);
console.log(`Total time: ${min} min ${sec} sec`);
