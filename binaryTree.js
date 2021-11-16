class Node {
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor(){
    this.root = null
  }

  insert(val){
    let node = new Node(val)
    if(!this.root) this.root = node
    return this.root.val
  }
}

let tree = new BinaryTree
module.exports = tree
