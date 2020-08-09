import chai from 'chai'
import Specification, { AndSpecification, OrSpecification, NotSpecification } from './../app/Specification'
import MockSpec from './MockSpec'
import Mock2Spec from './Mock2Spec'
const expect = chai.expect

/** @test {Specification} */
describe('Specification', () => {
  let spec

  beforeEach(() => {
    spec = new Specification()
  })

  /** @test {Specification#and} */
  describe('Specification#and', () => {
    it('should return a new AndSpecification', () => {
      const newSpec = new Specification()
      const specExpected = new AndSpecification(spec, newSpec)
      expect(spec.and(newSpec)).to.deep.equal(specExpected)
    })
  })

  /** @test {Specification#or} */
  describe('Specification#or', () => {
    it('should return a new OrSpecification', () => {
      const newSpec = new Specification()
      const specExpected = new OrSpecification(spec, newSpec)
      expect(spec.or(newSpec)).to.deep.equal(specExpected)
    })
  })

  /** @test {Specification#not} */
  describe('Specification#not', () => {
    it('should return a new NotSpecification', () => {
      const newSpec = new Specification()
      const specExpected = new NotSpecification(spec, newSpec)
      expect(spec.not(newSpec)).to.deep.equal(specExpected)
    })
  })
})

/** @test {AndSpecification} */
describe('AndSpecification', () => {
  let spec
  let mockSpec

  beforeEach(() => {
    mockSpec = new MockSpec()
    spec = new AndSpecification(mockSpec, mockSpec)
  })

  describe('AndSpecification#isSatisfied', () => {
    it('should return true if the two specs are true', () => {
      expect(spec.isSatisfied(mockSpec)).to.equals(true)
    })
  })
})

/** @test {OrSpecification} */
describe('OrSpecification', () => {
  let spec
  let mockSpec

  beforeEach(() => {
    mockSpec = new MockSpec()
    spec = new OrSpecification(mockSpec, mockSpec)
  })

  describe('OrSpecification#isSatisfied', () => {
    it('should return true if the two specs are true', () => {
      expect(spec.isSatisfied(mockSpec)).to.equals(true)
    })

    it('should return true if the two specs are true', () => {
      const spec2 = new OrSpecification(new Mock2Spec(), mockSpec)
      expect(spec2.isSatisfied(mockSpec)).to.equals(true)
    })
  })
})

/** @test {NotSpecification} */
describe('NotSpecification', () => {
  let spec
  let mockSpec

  beforeEach(() => {
    mockSpec = new MockSpec()
    spec = new NotSpecification(mockSpec)
  })

  describe('NotSpecification#isSatisfied', () => {
    it('should return true if the two specs are true', () => {
      expect(spec.isSatisfied(mockSpec)).to.equals(false)
    })
  })
})
