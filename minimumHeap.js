class MinimumHeap{
  constructor(){
    this.values = []
  }

  insert(val){
    this.values.push(val)
    this.bubbleUp(this.values.length - 1)
    return `Inserted`
  }

  bubbleUp(idx){
    let parent = Math.floor((idx - 1)/2)
    if(this.values[idx] < this.values[parent]){
      [this.values[idx], this.values[parent]] = [this.values[parent], this.values[idx]]
      this.bubbleUp(parent)
    }
  }
}

let heap = new MinimumHeap
exports = heap