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
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
            this.length++
        }
        return node.val
    }

    shift(){
        if(this.length === 0) return undefined
        if(this.length === 1){
            let node = this.root
            this.root = null
            return node
        }
        if(this.length > 1){
            let node = this.root
            this.root = this.root.next
            node.next = null
            return node
        }
    }

}

let list = new LinkedList
module.exports = list