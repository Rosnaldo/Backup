// Find all distinct combinations of given length with repetition alowed

const combination = (A, k) => {
  const B = [];
  const out = [];
  const recur = (i) => {
    if (B.length === k) {
      // console.log(B);
      out.push([...B]);
      return;
    }
    for (let j = i; j < A.length; j++) {
      B.push(A[j]);
      recur(j + 1);
      B.pop();
    }
  };
  recur(0);
  return out;
};
const arr = [1,2,3,4]
console.log(combination(arr, 2));

// recur = (str, out) => {
//   if (str.length === 0) {
//     console.log(out);
//     return;
//   }

//   for (let i = 0; i < str.length; i++) {
//     // push substring [0, i] into output vector
//     out.push(str.slice(0, i + 1));

//     // recur for remaining String [i+1, n-1]
//     recur(str.slice(i + 1), out);

//     // backtrack (remove current substring from vector)
//     out.pop();
//   }
// }

// recur('ABCD', []);
