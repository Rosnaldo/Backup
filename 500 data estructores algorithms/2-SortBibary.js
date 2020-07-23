let array = [0,0,1,0,1,1,1,0,0];

// const arr = [];
// const sun = 1000;
// for (let i = 0; i < 10000; i++) {
//   val = (Math.floor(Math.random() * 10) % 2 === 0) ? 0 : 1;
//   arr.push(val);
// }

// Exemplo1
function sort(array) {
  return array.sort((a, b) => a - b);
}

// Exemplo2
function count(array) {
  let count = 0;
  let size = array.length;
  for (let i = 0; i < array.length - 1; i++) {
    (array[i] === 0) ? count++ : console.log()
  }
  let zeros = new Array(count).fill(0);
  let ones = new Array(size - count).fill(1);
  return [...zeros, ...ones];
}

// Exemplo3
function swap(arr) {
  let lo = 0;
  let mid = 0;
  let hi = arr.length - 1; 

  while (mid <= hi) {
    if (arr[mid] === 0) {
      let temp = arr[mid];
      arr[mid] = arr[lo];
      arr[lo] = temp;
      lo++; mid++;
    } else {
      mid++;
    }
  }

  return arr;
}

// Exemplo4
function sortBinaryArray(arr) {
  let left = 0;
  let right = arr.length
  
  while (left < right) {
    if (arr[left] === 1 && arr[right] === 0) {
      swap(arr, left, right);
      left++;
      right--;
    } else if(arr[left] === 1) {
      right--;
    } else if(arr[right] === 0) {
      left++;
    } else if(arr[left] === 0 && arr[right] === 1) {
      left++;
      right--;
    }
  }
}

function swap(arr, i , j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}


let antes3 = Date.now();
console.log(swap(array));
let duracao3 = Date.now() - antes3;
console.log('swap ' + duracao3);

