import Specification from './app/Specification';
export default Specification;


class Spec extends Specification {
  isSatisfied (candidate) {
    return candidate % 3 === 0;
  }
}

class Spec2 extends Specification {
  isSatisfied (candidate) {
    return candidate % 7 === 0;
  }
}

class Spec3 extends Specification {
  isSatisfied (candidate) {
    return candidate % 10 === 0;
  }
}

const s12 = new Spec().and(new Spec2());
const s123 = s12.or(new Spec3());

console.log(s123.isSatisfied(3 * 7)); // true
console.log(s123.isSatisfied(10)); // true
console.log(s123.isSatisfied(22)); // false
