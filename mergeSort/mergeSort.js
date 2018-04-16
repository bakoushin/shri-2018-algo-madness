function mergeSort(array) {

  if (array.length < 2) {
    return array;
  } 

  const length = array.length;
  const middle = Math.floor(array.length / 2);

  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  let mergedArray = [];

  while (sortedLeft.length && sortedRight.length) {
    if (sortedLeft[0] <= sortedRight[0]) {
      mergedArray.push(sortedLeft.shift(1));
    } else {
      mergedArray.push(sortedRight.shift(1));
    }
  }

  return mergedArray.concat(sortedLeft, sortedRight);
}

module.exports = mergeSort;
