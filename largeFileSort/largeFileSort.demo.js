const File = require('./File');
const largeFileSort = require('./largeFileSort');

console.log(largeFileSort(new File([1,6,3,5,2,7,4,8])));

console.log(largeFileSort(new File([4,7,3,6,2,1,5,8,9,10])));

console.log(largeFileSort(new File([4,7,3,6,2,5,1,5,8,9,10])));

console.log(largeFileSort(new File()));
