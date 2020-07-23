const primo = 311235292532113;

function otimizada(primo) {
  const algarismos = primo.toString().split('');
  const last = algarismos[algarismos.length - 1];
  if (last === '2' || last === '4' || last === '5' || last === '6' || last === '8' || last === '0') {
    return false;
  }
  let primoTemp = primo;
  let index = 3;
  while (index < primoTemp) {
    if (primo % index === 0) {
      console.log(index);
      return false;
    }
    primoTemp = primo / index;
    index += 2;
  }
  return true;
}

let antes = Date.now();
console.log(otimizada(primo));
let duracao = Date.now() - antes;
console.log('otimizada ' + duracao);
