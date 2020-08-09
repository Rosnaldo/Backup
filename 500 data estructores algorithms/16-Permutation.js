let first = true;

const verification = (arr, k) => {
  if (arr.length === k && first) {
    console.log('coisa', arr)
    first = false
  }
};

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
    if (verification(arr, k)) { return; }
    if (k === len) {
      out.push([...arr]);
    } else {
      for (let i = k; i < len; i++) {
        switchPosition(arr, i, k);
        recur(arr, k + 1);
        switchPosition(arr, k, i);
      }
    }
  };
  recur(A, 0);

  return out;
};

permutation(['a', 'b', 'c']);