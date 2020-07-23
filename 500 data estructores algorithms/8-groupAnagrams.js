const groupAnagrams = (strs) => {
  let map = new Map();
  for (let str of strs) {
      const s = uniform(str);
      let l = map.get(s) || [];
      l.push(str);
      map.set(s, l);
  }
  return Array.from(map.values());
};

const uniform = function(str) {
  return str
      .split("")
      .sort()
      .join("");
};

const groupAnagrams2 = (strs) => {
primes = {
  'a': 2, 
  'b': 3, 
  'c': 5, 
  'd': 7, 
  'e': 11, 
  'f': 13,
  'g': 17,
  'h': 19,
  'i': 23,
  'j': 29,
  'k': 31,
  'l': 37,
  'm': 41,
  'n': 43,
  'o': 47,
  'p': 53,
  'q': 59,
  'r': 61,
  's': 67, 
  't': 71,
  'u': 73,
  'v': 79,
  'w': 83,
  'x': 89,
  'y': 97,
  'z': 101,
  };

  let i = 0;
  const map = new Map();
  while(i < strs.length) {
    let product = 1;
    for(let s of strs[i]) {
      product *= primes[s];
    }
    const arr =  map.get(product) || [];
    arr.push(strs[i]);
    map.set(product, arr);
    i++;
  }
  return Array.from(map.values());
}

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));
