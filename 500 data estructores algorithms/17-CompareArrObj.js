const obj = {
  parm1: 'coisa',
  param2: [3, { 'de': 3 }, 2],
  parm3: {
    param4: 'coisa',
    ef: [2, [], [2,3]]
  },
  param5: 12
};

const obj2 = {
  parm1: 'coisa',
  param2: [3, { 'de': 3 }, 2],
  parm3: {
    param4: 'coisa',
    ef: [2,[], [2,3]]
  },
  param5: 12
};

const array = [{co: 12}, 2, 'a'];
const array2 = [{co: 12}, 2, 'a'];


const main = (e1, e2) => {
  let boo = true;
  const isObject = (o) => (o instanceof Object && !Array.isArray(o));
  const verifyBoth = (e1, e2, exp) => exp(e1) && exp(e2);
  const compareLength = (arr, arr2) => arr.length === arr2.length;

  const compareObj = (obj1, obj2) => {
    const entries1 = Object.entries(obj1);
    const entries2 = Object.entries(obj2);

    if (!compareLength(entries1, entries2)) {
      boo = false;
      return;
    }

    for (let i = 0; i < entries1.length; i++) {
      if (!boo) return;
      const [key, val] = entries1[i];
      const val2 = obj2[key];

      if (!isArrayOrObj(val, val2)) {
        boo = (val === val2);
      }
    }
  };

  const compareArray = (arr, arr2) => {
    if (!compareLength(arr, arr2)) {
      boo = false;
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!boo) return;
      if (!isArrayOrObj(arr[i], arr2[i])) {
        boo = (arr[i] === arr2[i]);
      }
    }
  };

  const isArrayOrObj = (e1, e2) => {
    if (verifyBoth(e1, e2, isObject)) {
      compareObj(e1, e2);
      return true;
    }
    if (verifyBoth(e1, e2, Array.isArray)) {
      compareArray(e1, e2);
      return true;
    }
    return false;
  };

  isArrayOrObj(e1, e2);
  return boo;
}

console.log(main(obj, obj2));

