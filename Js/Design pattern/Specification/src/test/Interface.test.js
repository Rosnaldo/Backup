import chai from 'chai'
import Interface from './../app/Interface'
import enuns from './../app/Enuns'
const expect = chai.expect

/** @test {Interface} */
describe('Interface', () => {
  let spec

  beforeEach(() => {
    spec = new Interface()
  })

  /** @test {Interface#isSatisfied} */
  describe('Interface#isSatisfied', () => {
    it('should throw an error,telling not implemented', () => {
      expect(() => spec.isSatisfied()).to.throw(enuns.ISSATIFIED_NOT_IMPLEMENT)
    })
  })

  /** @test {Interface#and} */
  describe('Interface#and', () => {
    it('should throw an error, telling not implemented', () => {
      expect(() => spec.and()).to.throw(enuns.AND_NOT_IMPLEMENT)
    })
  })

  /** @test {Interface#or} */
  describe('Interface#or', () => {
    it('should throw an error, telling not implemented', () => {
      expect(() => spec.or()).to.throw(enuns.OR_NOT_IMPLEMENT)
    })
  })

  /** @test {Interface#not} */
  describe('Interface#not', () => {
    it('should throw an error, telling not implemented', () => {
      expect(() => spec.not()).to.throw(enuns.NOT_NOT_IMPLEMENT)
    })
  })
})
