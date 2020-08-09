# Javascript specification pattern ES6

<a href="https://travis-ci.org/Skahrz/specification-pattern"><img src="https://travis-ci.org/Skahrz/specification-pattern.svg?branch=master"></a>
<a href='https://coveralls.io/github/Skahrz/specification-pattern?branch=master'><img src='https://coveralls.io/repos/github/Skahrz/specification-pattern/badge.svg?branch=master' alt='Coverage Status' /></a>


```javascript
import Specification from 'specification-pattern'

class Spec extends Specification {
  isSatisfied (candidate) {
    return candidate % 3 === 0
  }
}

class Spec2 extends Specification {
  isSatisfied (candidate) {
    return candidate % 7 === 0
  }
}

class Spec3 extends Specification {
  isSatisfied (candidate) {
    return candidate % 10 === 0
  }
}

const s12 = new Spec().and(new Spec2())
const s123 = s12.or(new Spec3())

console.log(s123.isSatisfied(3*7)) // true
console.log(s123.isSatisfied(10)) // true
console.log(s123.isSatisfied(22)) // false
```
