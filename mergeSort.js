function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  const sortedArray = [];

  while (sortedLeftArray.length > 0 && sortedRightArray.length > 0) {
    if (sortedLeftArray[0] < sortedRightArray[0]) {
      sortedArray.push(sortedLeftArray.shift());
    } else {
      sortedArray.push(sortedRightArray.shift());
    }
  }

  while (sortedLeftArray.length > 0) {
    sortedArray.push(sortedLeftArray.shift());
  }

  while (sortedRightArray.length > 0) {
    sortedArray.push(sortedRightArray.shift());
  }

  return sortedArray;
}
