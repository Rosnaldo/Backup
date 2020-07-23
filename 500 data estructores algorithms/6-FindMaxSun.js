// Find largest number possible from set of given numbers

// If (num1 > num2)
function greater(a, b) {
  const array1 = (a + '').split('');
  const array2 = (b + '').split('');
  while (array1.length !== array2.length) {
    (array1.length > array2.length) ? array2.push(0) : array1.push(0);
  }
  const num1 = Number(array1.join(''), 2);
  const num2 = Number(array2.join(''), 2);
  return (num1 > num2) ? +1 : -1;
}

function sort(arr) {
  return arr.sort((a, b) => greater(b, a));
}

console.log(sort([12, 0, 40, 5, 7, 19]))
