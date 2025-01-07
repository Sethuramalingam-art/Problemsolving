function deepcopy(obj) {
	if (obj === null || typeof obj !== 'object') {
  	return obj
  }
  
  if (Array.isArray(obj)) {
  	return obj.map((item)=> deepcopy(item))
  }
  
  let copy={};
  
  for (const key in obj) {
  	if (obj.hasOwnProperty(key)) {
    		copy[key]=deepcopy(obj[key])
    }
  }
  
  return copy
}

const original = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "traveling"]
};

const copied = deepcopy(original);
console.log(copied);

copied.name = 'sethu'

console.log(copied);
console.log(original);
