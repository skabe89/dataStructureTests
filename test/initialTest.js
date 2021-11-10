const expect = require('chai').expect
const validator = require('../initialTest')
const heap = require('../minimumHeap')



describe('#greet()', () => {
  it("Should Say Hello", () => {
    expect(validator.greet("Hello")).to.equal("Hello World!")
  })
})

describe('#goodbye()', () => {
  it('Should say Goodbye', () => {
    expect(validator.goodbye('Goodbye')).to.equal("Goodbye World!")
  })
})

describe('#heap.insert()', () => {
  it('Should add to values', () => {
    expect(JSON.stringify(heap.insert(5))).to.equal(JSON.stringify([5]))
  })
})

describe('#heap.insert()', () => {
  it('Should add to values', () => {
    expect(JSON.stringify(heap.insert(3))).to.equal(JSON.stringify([3,5]))
  })
})