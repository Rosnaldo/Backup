const str = '[](){}';

const isValid = (s) => {
  if (!s) return true;
  let stack = [];
  const dict = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (dict.has(s[i])) {
      stack.push(s[i]);
    } else {
      let item = stack.pop();
      if (dict.get(item) !== s[i]) return false;
    }

  }
  if (stack.length !== 0) return false;

  return true;
};

console.log(isValid(str))
