function arabicToRoman(number){
  let roman = "";
  const romanNumList = {
    M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1,
  };
  let a;
  if(number < 1 || number > 3999)
    return "Enter a number between 1 and 3999";
  else{
    for(let key in romanNumList){
      a = Math.floor(number / romanNumList[key]);
      if (a >= 0){
          for(let i = 0; i < a; i++){
            roman += key;
          }
        }
      number = number % romanNumList[key];
    }
  }
  return roman;
}


const romanToInt = (s) => {
  const two = {
    IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900,
  };
  const key2 = Object.keys(two);
  const values2 = Object.values(two);
  const length2 = key2.length - 1;

  const one = {
    M: 1000, D: 500, C: 100, L: 50,  X: 10, V: 5, I: 1,
  };
  const key1 = Object.keys(one);
  const values1 = Object.values(one);

  let num = 0;

  for (let y = 0; y <= length2; y++) {
    if (s.includes(key2[y])) {
      s = s.replace(key2[y], '')
      num += values2[y];
    }
  }

  let i = key1.length - 1;
  while (i > -1) {
    while (s.includes(key1[i])) {
      s = s.slice(0, s.length - 1);
      num += values1[i];
    }
    i--;
  }

  return num
}

