function bubbleSort(array) {

  let isSwitched = true;

  while (isSwitched) {
    isSwitched = false;
    for (let i = 1; i < array.length; i++ ) {
      const currentItem = array[i];
      const previousItem = array[i - 1];
      if (currentItem < previousItem) {
        array[i] = previousItem;
        array[i - 1] = currentItem;
        isSwitched = true;
      }
    }
  }

  return array;
}

module.exports = bubbleSort;
