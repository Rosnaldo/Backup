import Enuns from './Enuns'

export default class Interface {
  isSatisfied (obj) {
    throw new Error(Enuns.ISSATIFIED_NOT_IMPLEMENT);
  }

  and (obj) {
    throw new Error(Enuns.AND_NOT_IMPLEMENT);
  }

  or (obj) {
    throw new Error(Enuns.OR_NOT_IMPLEMENT);
  }

  not (obj) {
    throw new Error(Enuns.NOT_NOT_IMPLEMENT);
  }
}
