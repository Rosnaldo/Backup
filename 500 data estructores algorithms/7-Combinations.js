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
      console.log(B, 'j', j, 'i', i)
      recur(j + 1);
      B.pop();
    }
  };
  recur(0);
  return out;
};

const arr = [1,2,3,4]

console.log(combination(arr, 2));

