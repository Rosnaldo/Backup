import Specification from './../app/Specification'

export default class Mock2Spec extends Specification {
  isSatisfied (candidate) {
    return typeof candidate.isSatisfied !== 'function'
  }
}
