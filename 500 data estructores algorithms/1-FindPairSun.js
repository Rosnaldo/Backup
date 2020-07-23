//Given an unsorted array of integers, find a pair with given sum in it.

let arr = [5, 4, 3, 0, 6, 7, 5, 7, 3];
const sun = 10;

// const arr = [];
// const sun = 10000;
// for (let i = 0; i < 100000; i++) {
//   arr.push(Math.floor(Math.random() * sun) + 1);
// }


function maisOtimizado(sun2, arr2) {
  const pair = [];
  let low = 0;
  let high = arr2.length - 1;
  arr2 = arr2.sort((a, b) => a - b);

  while (low < high) {
    const valLow = arr2[low];
    const valHigh = arr2[high];

    if (sun2 - valLow === valHigh) {
      pair.push([valLow, valHigh]);
    }

    (valHigh + valLow <= sun2) ? low++ : high--;
  }

  return pair;
}

function findPair(sun2, arr2) {
  const pair = [];
  const qt = arr2.reduce((acc, val) => {
    if (val === sun2 /2) acc++; 
    return acc;
  }, 0);
  const bool = (qt > 1) ? true : false;

  const novaArr = arr2.filter((este, i) => arr2.indexOf(este) === i && este !== (sun2 / 2));
  
  while (novaArr.length > 0) {
    let ind;
    let j;
    for (let i = 1; i < novaArr.length; i++) {
      if (sun2 - novaArr[i] === novaArr[0]) {
        ind = i;
        j = novaArr[i];
      }
    }
    if(typeof j === 'undefined') {
      novaArr.splice(ind, 1);
    }
    else {
      pair.push([novaArr[0], j]);
      novaArr.splice(novaArr.indexOf(j), 1);
      novaArr.splice(0, 1);
    }
  }
  (bool) ? pair.push([sun / 2, sun / 2]) : console.log();
  return pair;
}

// function loopDuplo(sun2,arr2) {
//   let pair = [];
//   for(let i = 0; i < arr2.length; i++) {
//     for(let j = 1; j < arr2.length; j++) {
//       if (arr2[i] + arr2[j] === sun2) {
//         pair.push([arr2[i], arr2[j]]);
//       }
//     }
//   }
//   pair = pair.filter((item, i) => {
//     let bool = true;
//     for(let j = i + 1; j < pair.length; j++) { 
//       if (pair[i][0] === pair[j][0] || pair[i][0] === pair[j][1]) {
//         bool = false;
//       }
//     }
//     return bool;
//   });
  
//   return pair;
// }

// let antes = Date.now();
// console.log(loopDuplo(sun, arr));
// let duracao = Date.now() - antes;
// console.log('loopDuplo ' + duracao);

// let antes2 = Date.now();
// findPair(sun, arr);
// let duracao2 = Date.now() - antes2;
// console.log('findPair ' + duracao2);

// var antes3 = Date.now();
// maisOtimizado(sun, arr);
// var duracao3 = Date.now() - antes3;
// console.log('maisOtimizado ' + duracao3);


