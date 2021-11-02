const expect = require('chai').expect
const validator = require('../initialTest')

describe('#greet()', () => {

  it("Should Say Hello", () => {
    expect(validator.greet("Hello")).to.equal("Hello World!")
  })

  it('Should say Goodbye', () => {
    expect(validator.greet('Goodbye')).to.equal("Goodbye World!")
  })
})