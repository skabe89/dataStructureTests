class MinimumHeap{
  constructor(){
    this.values = []
  }

  insert(val){
    this.values.push(val)
    this.bubbleUp(this.values.length - 1)
    return this.values
  }

  bubbleUp(idx){
    let parent = Math.floor((idx - 1)/2)
    if(this.values[idx] < this.values[parent]){
      [this.values[idx], this.values[parent]] = [this.values[parent], this.values[idx]]
      this.bubbleUp(parent)
    }
  }

  remove(){
    if(this.values.length === 0) return undefined
    if(this.values.length === 1) return this.values.pop()
    //[this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]]
    let last = this.values[this.values.length - 1]
    this.values[this.values.length - 1 ] = this.values[0]
    this.values[0] = last
    let min = this.values.pop()
    return min
  }
}

let heap = new MinimumHeap
module.exports = heap