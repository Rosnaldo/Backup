const array = [1, 3, 5, 6, 10, 12, 9];
// const array = [9, 12, 10, 6, 5, 3, 1];
const low = 0;
const high = array.length - 1; //6

function findPeak(array, low, high) {
  let mid = Math.round((high + low) / 2); //3
  const n = array.length - 1;

  if (mid === 0 || array[mid] >= array[mid - 1] &&
    array[mid] >= array[mid + 1] || mid === n) {
      return mid;
    }
    
    // left
  if (array[mid] < array[mid - 1]) {
    return findPeak(array, low, mid);
  }

  if (array[mid] < array[mid + 1]) {
    return findPeak(array, mid, high);
  }
}

console.log(findPeak(array, low, high))
