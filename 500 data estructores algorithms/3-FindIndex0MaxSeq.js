const array = [0,1,0,0,1,1,0,1,1,0,1];

let max = 0;
let ones = 0;
let zeros = 0;
let sq = 0;
let index = 0;
let indexMax = 0;
function coisa(array) {
  for (let i = 0; i < array.length - 1; i++) {
    console.log(ones, zeros, sq)
    if (array[i] === 0) {
      zeros += 1;
      sq += 1;
      if (zeros === 1) {
        index = i;
      }
      if (sq === 2) {
        zeros = 0;
        sq = 0;
        ones = 0;
      }
      if (zeros === 2) {
        zeros = 0;
        (ones > max) ? maxmu() : console.log();
        console.log('max: '+ max)
        ones = 0;
      }
    }
    else {
      ones += 1;
      sq = 0;
    }
  }

  return index;
}

function maxmu() {
  max = ones;
  indexMax = index;
}

console.log(coisa(array))
