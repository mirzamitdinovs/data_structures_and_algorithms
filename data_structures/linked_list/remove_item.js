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
  getSize(){
    return this.size
  }
  print(){
    if(this.isEmpty()){
      console.log('list is empty')
      return
    }
    let curr = this.head
    let values = ''
    while(curr){
      values+=curr.value+' '
      curr = curr.next
    }
    console.log('values: ', values.trim())
    return
  }
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      let curr = this.head
      while(curr.next){
        curr = curr.next
      }
      curr.next = node
    }
    this.size++
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

const list = new LinkedList()
console.log('is empty: ', list.isEmpty())
console.log('size: ', list.getSize())
list.append(10)
list.append(20)
list.append(30)
list.append(20)
list.print()
console.log('removed node by index: ', list.removeFrom(10))
list.print()
console.log('removed node by value: ', list.removeVal(100))
list.print()
list.removeValues(20)
list.print()
