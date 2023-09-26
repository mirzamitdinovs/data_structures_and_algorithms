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

  // Add new value
  prepend(value){
    const node = new Node(value)
    if(!this.isEmpty()){
      node.next = this.head
    }
    this.head = node
    this.size++
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

  // Insert new value
  insert(value, index){
    if(index<0 || index>this.size){
      return null
    }
    if(index==0){
      this.prepend(value)
    }else{
      const node = new Node(value)
      let prev = this.head
      for(let i = 0; i<index-1; i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

}

const list = new LinkedList()
console.log('is empty: ', list.isEmpty())
console.log('size: ', list.getSize())
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(20)
list.print()
list.insert(100,4)
