class Node{
  constructor(value){
    this.value =value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }
  isEmpty(){
    return this.size===0
  }
  //Remove element by index
  removeFrom(index){
    if(index<0 || index>this.size-1){
      return -1
    }
    if(index==0){
      this.head = this.head.next
    }else{
      let prev = this.head
      let removedNode
      for(let i = 0; i<index-1; i++){
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
      this.size--
      return removedNode.value
    }
    return -1
  }

  //Remove element by value
  removeVal(value){
    if(this.isEmpty()){
      return -1
    }
    if(this.head.value==value){
      this.head = this.head.next
      this.size--
      return value
    }else{
      let prev = this.head
      while(prev.next && prev.next.value!=value){
        prev = prev.next
      }
      if(prev.next){
        let removedNode = prev.next
        prev.next = removedNode.next
        this.size--
        return value
      }
      return -1
    }
  }

  //Remove all occurences of the value
  removeValues(value){
    let curr = this.head
    while(this.head.value==value){
      this.head = this.head.next
    }
    while(curr.next){
      if(curr.next.value==value){
        curr.next = curr.next.next
      }else{
        curr = curr.next
      }
    }
  }
}

