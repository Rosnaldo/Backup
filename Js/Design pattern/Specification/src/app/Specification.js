import Interface from './Interface'


export default class Specification extends Interface {
  and (spec) {
    return new AndSpecification(this, spec);
  }

  or (spec) {
    return new OrSpecification(this, spec);
  }

  not () {
    return new NotSpecification(this);
  }
}


export class AndSpecification extends Specification {
  constructor (firstSpec, secondSpec) {
    super();

    this.firstSpec = firstSpec;
    this.secondSpec = secondSpec;
  }

  isSatisfied (candidate) {
    return this.firstSpec.isSatisfied(candidate)
      && this.secondSpec.isSatisfied(candidate);
  }
}


export class OrSpecification extends Specification {
  constructor (firstSpec, secondSpec) {
    super();

    this.firstSpec = firstSpec;
    this.secondSpec = secondSpec;
  }

  isSatisfied (candidate) {
    return this.firstSpec.isSatisfied(candidate)
      || this.secondSpec.isSatisfied(candidate);
  }
}

export class NotSpecification extends Specification {
  constructor (firstSpec) {
    super();
    this.firstSpec = firstSpec;
  }

  isSatisfied (candidate) {
    return !this.firstSpec.isSatisfied(candidate);
  }
}
