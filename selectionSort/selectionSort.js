function selectionSort(array) {
  let pointer = array.length - 1;
  while(pointer > 0) {
    let biggestIndex = pointer;
    for (let i = 0; i < pointer; i++) {
      if (array[i] > array[biggestIndex]) {
        biggestIndex = i;
      }
    }
    const item = array.splice(biggestIndex, 1)[0];
    array.splice(pointer, 0, item);
    pointer--;
  }
  return array;
}

module.exports = selectionSort;
