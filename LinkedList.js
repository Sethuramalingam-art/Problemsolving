function linkedList() {

	let Node = function (elem) {
  	this.element = elem;
    this.next = null;
  }
  
  let length = 0;
  let head = null;
  
  this.append = function(element) {
  	let node = new Node(element), current;
    if (head === null) {
    	head=node
    } else {
    	current=head;
    	while(current.next) {
      	current=current.next
      }
      current.next=node
    }
    length++;
  }
  
  this.remove = function(position) {
  	if (position>-1 && position<length) {
    	let current=head1, previous, index=0;
      
      if (position===0) {
      head=current.next;
      } else {
      while(index++<position){
      	previous=current;
        current=current.next;
      }
      previous.next=current.next
      }
      length--;
      return current.element;
    } else {
    return null;
    }
  }
  
  this.insertAt = function(position, element) {
  	if (position>-1 && position<length) {
    let node = new Node(element);
    let current = head, previous, index=0;
    if (position===0) {
    	node.next=current;
      head=node
    } else {
    while(index++<position){
    	previous=current;
      current=current.next
    }
    node.next=current;
    previous.next=node
    return true
    }
    }
  }
  this.indexOf=function(element){
    let current=head, index=-1;
    
    while(current){
    if(element === current.element) {
    	return ++index
    }
    index++;
    current=current.next;
    }
  }
}

console.log(linkedList());
