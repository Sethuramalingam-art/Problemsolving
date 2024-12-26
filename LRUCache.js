class LRUCache {
	constructor(capacity) {
  	this.capacity = capacity;
    this.cache=[]
  }
  
  isCapacityFull() {
  	return this.cache.length === this.capacity
  }
  
  getItem(item) {
  	return this.cache.indexOf(item);
  }
  
  setItem(item) {
  let getItemIndex = this.getItem(item);
  if (getItemIndex === -1) {
  if (this.isCapacityFull()) {
     this.cache.pop();
     this.cache.unshift(item);
    } else {
    this.cache.unshift(item);
    }
  }
  
  if (getItemIndex !== -1) {
  this.cache.splice(getItemIndex,1);
     this.cache.unshift(item);
  }
  	console.log(this.cache);
  }
}


const c = new LRUCache(4);

c.setItem(10);
c.setItem(20);
c.setItem(10);
c.setItem(30);
c.setItem(40);
c.setItem(50);
c.setItem(30);
c.setItem(40);
