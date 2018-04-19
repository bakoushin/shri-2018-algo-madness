function binarySearch(needle, haystack) {
  let min = 0;
  let max = haystack.length - 1;

  while (max >= min) {
    const avg = Math.floor((min + max) / 2);
    const val = haystack[avg];
    if (val === needle) {
      return avg;
    } else if (val < needle) {
      min = avg + 1;
    } else {
      max = avg - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
