const primes = [
  2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,
  71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,
  149,151,157,163,167,173,179,181,191,193,197,199,211,
  223,227,229,233,239,241,251,257,263,269,271,277,281,
  283,293,307,311,313,317,331,337,347,349,353,359,367,
  373,379,383,389,397,401,409,419,421,431,433,439,443,
  449,457,461,463,467,479,487,491,499,503,509,521,523,
  541,547,557,563,569,571,577,587,593,599,601,607,613,
  617,619,631,641,643,647,653,659,661,673,677,683,691,
  701,709,719,727,733,739,743,751,757,761,769,773,787,
  797,809,811,821,823,827,829,839,853,857,859,863,877,
  881,883,887,907,911,919,929,937,941,947,953,967,971,
  977,983,991,997
];

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


const alunos = ['Gi', 'Li', 'Gui', 'Jo', 'Fe', 'Sa', 'Do', 'Ju', 'Ge'];
const gruposAntigos = [
  ['Gi', 'Li'], ['Jo', 'Gui'], ['Sa', 'Fe'],
  ['Gui', 'Gi', 'Fe'], ['Jo', 'Li', 'Sa'],
  ['Do', 'Ju', 'Ge']
];

const Amanda = (alunos, grAt, k) => {
  const aluKeys = {};
  let total = 1;
  for (let i = 0; i < alunos.length; i += 1) {
    aluKeys[alunos[i]] = primes[i];
    total *= primes[i];
  }

  const map1 = new Map();
  const multp = (arr, map) => {
    let mult = 1;
    for (let j = 0; j < arr.length; j += 1) {
      mult *= aluKeys[arr[j]];
    }
    map.set(mult, arr);
  };
  for (let i = 0; i < grAt.length; i += 1) {
    combination(grAt[i], 2)
      .forEach(item => multp(item, map1));
  }

  const keyExist = (B) => {
    const arr = combination(B, 2);
    for (let i = 0; i < arr.length; i += 1) {
      if (map1.has(arr[i].reduce((acc, val) => acc * aluKeys[val], 1))) {
        return true;
      }
    }
    return false;
  };

  const arrayKey = (A) => {
    return A.reduce((acc, val) => acc * aluKeys[val], 1);
  };

  const combEqPoss = (A, k) => {
    const B = [];
    const out = {};
    const recur = (i) => {
      if (B.length === k) {
        if (!keyExist(B)) {
          out[arrayKey(B)] = [...B];
        }
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

  const eqPoss = combEqPoss(alunos, k);

  const combRandom = (A, k) => {
    const B = [];
    const totalKey = (C) => {
      return  C.reduce((acc, val) => acc * val, 1);
    };
    let bool;
    const recur = (i) => {
      if (bool) {
        return;
      }
      if (B.length === k) {
        if (totalKey(B) === total) {
          bool = [...B];
        }
        return;
      }
      for (let j = i; j < A.length; j++) {
        B.push(A[j]);
        recur(j + 1);
        B.pop();
      }
    };
    recur(0);
    return bool;
  };
  const final = combRandom(Object.keys(eqPoss), alunos.length / k);
  return final.reduce((acc, val) => [...eqPoss[val]], []);
}

console.log(Amanda(alunos, gruposAntigos, 3))



