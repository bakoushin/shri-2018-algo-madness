function selectionSort(array) {
  let pointer = array.length - 1;
  while(pointer > 0) {
    let biggestItemIndex = pointer;
    for (let i = 0; i < pointer; i++) {
      if (array[i] > array[biggestItemIndex]) {
        biggestItemIndex = i;
      }
    }
    const item = array.splice(biggestItemIndex, 1)[0]; // remove element from its position
    array.splice(pointer, 0, item); // insert into sorted part of array
    pointer--;
  }
  return array;
}

module.exports = selectionSort;
