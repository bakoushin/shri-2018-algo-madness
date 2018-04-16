function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const currentItem = array[i];
    for (let j = 0; j < i; j++) {
      const sortedItem = array[j];
      if (currentItem < sortedItem) {
        array.splice(i, 1); // remove current item from its original position
        array.splice(j, 0, currentItem); // insert current item into new position
        break;
      }
    }
  }
  return array;
}

module.exports = insertionSort;
