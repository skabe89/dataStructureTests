class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }

    insert(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node
            this.length++
        }
        else{
            let curr = this.head
            while(curr){
                curr = curr.next
            }
            curr.next = node
            this.length++
        }
        return node.val
    }

}

let list = new LinkedList
module.exports = list