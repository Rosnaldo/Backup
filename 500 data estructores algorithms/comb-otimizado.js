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

const workers = ['Cai', 'Gui', 'Ped', 'Anb', 'Dou', 'Fel'];

const restrictions = {
  invalidMembersWith: [
    ['Dou', 'Fel'],
  ],
  invalidGroups: [
    ['Cai', 'Gui'],
  ]
};

const invalidMembersWithPop = (invalidMembersWith, membersToPrime) => {
  const invalidMembersWithKeys = {};
  for (let i = 0; i < invalidMembersWith.length; i++) {
    let mult = 1;
    for (let j = 0; j < invalidMembersWith[i].length; j++) {
      const member = invalidMembersWith[i][j];
      const primeKey = membersToPrime[member]
      mult = mult * primeKey;
    }
    invalidMembersWithKeys[mult] = mult;
  }
  return invalidMembersWithKeys;
};

const invalidGroupsPop = (invalidGroups, membersToPrime) => {
  const invalidGroupsKeys = {};
  for (let i = 0; i < invalidGroups.length; i++) {
    let mult = 1;
    for (let j = 0; j < invalidGroups[i].length; j++) {
      const member = invalidGroups[i][j];
      const primeKey = membersToPrime[member];
      mult = mult * primeKey;
    }
    invalidGroupsKeys[mult] = mult;
  }
  return invalidGroupsKeys;
};

const arrKeysPop = (arr, group_size, membersToPrime) => {
  const num_groups = arr.length / group_size;
  const arrKeys = [];
  for (let i = 0; i < num_groups; i++) {
    let mult = 1;
    for (let j = 0; j < group_size; j++) {
      const index = (i * group_size) + j;
      mult = mult * membersToPrime[arr[index]];
    }
    arrKeys.push(mult);
  }
  return arrKeys;
};

const main = (members, restrictions, group_size, n_results) => {
  const membersToPrime = {};
  const primeToMembers = {};

  for (let i = 0; i < members.length; i += 1) {
    membersToPrime[members[i]] = primes[i];
    primeToMembers[primes[i]] = members[i];
  }

  const { invalidMembersWith, invalidGroups } = restrictions;
  const invalidMembersWithKeys =
    invalidMembersWithPop(invalidMembersWith, membersToPrime);

  const invalidGroupsKeys =
    invalidGroupsPop(invalidGroups, membersToPrime);

  const out = [];
  let minTimes = 0;

  const verifications = (arr, k) => {
    if (minTimes < arr.length) {
      minTimes++;
      return false;
    }

    if (out.length === n_results) {
      return true;
    }

    const arrKeys = arrKeysPop(arr, group_size, membersToPrime);

    if (arrKeys.some((key) => invalidGroupsKeys[key])) {
      return true;
    }

    return false;
  };

  const switchPosition = (arr, p1, p2) => {
    let tmp;
    tmp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = tmp;
  };

  let count = 0;

  const permutation = (A) => {
    const recur = (arr, k) => {
      let len = arr.length;
      if (verifications(arr, k)) { return; }
      if (k === len) {
        out.push([...arr]);
      } else {
        for (let i = k; i < len; i++) {
          count++;
          switchPosition(arr, i, k);
          recur(arr, k + 1);
          switchPosition(arr, k, i);
        }
      }
    };
    recur(A, 0);
  };
  
  permutation(members);
  console.log(count)
  console.log(out);
};

main(workers, restrictions, 2);
