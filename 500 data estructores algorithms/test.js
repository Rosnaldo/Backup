//      indeces  0  1  2  3  4
const numbers = [1, 2, 3, 4, 5];
const fruits = ['banana', 'apple'];


for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

fruits.forEach((item) => {
  console.log(item);
});

// soma +1
const sum_one = (array) => {
  const array2 = [];

  for (let i = 0; i < array.length; i++) {
    array2[i] = array[i] + 1;
  }

  return array2;
}

function sum_one2() {
  const array = [];
  numbers.forEach((num) => {
    array.push(num + 1);
  });
  return array;
} 

console.log(sum_one(numbers))
console.log(sum_one2(numbers))
