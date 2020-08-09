import Specification from './../app/Specification'

export default class MockSpec extends Specification {
  isSatisfied (candidate) {
    return typeof candidate.isSatisfied === 'function'
  }
}
