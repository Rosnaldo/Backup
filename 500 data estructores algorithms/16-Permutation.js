let count = 0;

const permutation = (A) => {
  const switchPosition = (arr, p1, p2) => {
    let tmp;
    tmp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = tmp;
  };
  const out = [];
  const recur = (arr, k) => {
    let len = arr.length;
    if (k === len) {
      out.push([...arr]);
    } else {
      for (let i = k; i < len; i++) {
        count++;
        console.log(arr, 'i', i, 'k', k);
        switchPosition(arr, i, k);
        console.log(arr, 'i', i, 'k', k);
        recur(arr, k + 1);
        switchPosition(arr, k, i);
      }
    }
  };
  recur(A, 0);

  return out;
};

console.log(permutation(['a', 'b', 'c']))
