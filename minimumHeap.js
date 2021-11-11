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
    this.cascadeDown(0)
    return min
  }

  cascadeDown(idx){
    let left = (idx * 2) + 1
    let right = (idx * 2) + 2
    let min

    if(!this.values[left]) return true
    else if(!this.values[right]) min = left
    else if(this.values[left] <= this.values[right]) min = left
    else min = right

    if(this.values[idx] > this.values[min]){
      let hold = this.values[min]
      this.values[min] = this.values[idx]
      this.values[idx] = hold
      this.cascadeDown(min)
    }
  }
}

let heap = new MinimumHeap
module.exports = heap