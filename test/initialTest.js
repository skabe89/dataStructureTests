const expect = require('chai').expect
const validator = require('../initialTest')
const heap = require('../minimumHeap')
const tree = require('../binaryTree')
const list = require('../linkedList')



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

describe('#heap.insert()', () => {
  it('Should add to values', () => {
    expect(JSON.stringify(heap.insert(1))).to.equal(JSON.stringify([1,5,3]))
  })
})

describe('#heap.insert()', () => {
  it('Should add to values', () => {
    expect(JSON.stringify(heap.insert(2))).to.equal(JSON.stringify([1,2,3,5]))
  })
})

describe('#heap.remove()', () => {
  it('Should remove minimum value', () => {
    expect((heap.remove())).to.equal(1)
  })
})

describe('#heap.remove()', () => {
  it('Values should be in order', () => {
    expect((JSON.stringify(heap.values))).to.equal(JSON.stringify([2,5,3]))
  })
})

describe('tree', () => {
  it('Should create node as root', () => {
    expect(tree.insert(5)).to.equal(5)
  })
})

describe('linkedList', () => {
  it('Should create node as root', () => {
    expect(list.insert(5)).to.equal(5)
  })
})

describe('linkedList', () => {
  it('Should add node to list', () => {
    expect(list.insert(2)).to.equal(2)
  })
})

describe('linkedList', () => {
  it('Should have 2 nodes in list', () => {
    expect(list.length).to.equal(2)
  })
})

describe('linkedList', () => {
  it('Should remove and return node', () => {
    expect(list.shift()).to.equal(5)
  })
})

describe('linkedList', () => {
  it('Should remove and return node', () => {
    expect(list.shift()).to.equal(2)
  })
})

describe('linkedList', () => {
  it('Should remove nodes', () => {
    expect(list.length).to.equal(0)
  })
})

