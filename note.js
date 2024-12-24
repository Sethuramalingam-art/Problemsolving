
var x = 10

var y = {
name: 'set',
age: 0
}
console.log(delete x) // false
console.log(x); //10

console.log(delete y.name); // true
console.log(y); // {age:0}

console.log(!!0); //false

!'0' => false
!0 => true

for(let i=1;i<5;i++) {
 if(i===3) continue;
 console.log(i) // 1,2,4
}


for(let i=1;i<5;i++) {
 if(i===3) break;
 console.log(i) // 1,2
}

(function(){
  var a=b=3
})()


console.log(b); //3
console.log(a): typeof a undefined and console.log(a) // refernece error a is not defined


const obj = {
name: 'x',
method: function () {
	setTimeout(function(){
  console.log(this.name); //result because window.name have result
  },500)
}
}

obj.method()

const obj1 = {
name: 'x',
method: function () {
	setTimeout(()=>{
  console.log(this.name); //x
  },500)
}
}

obj1.method()

const obj2 = {
name: 'x',
method: function () {

  console.log(this.name); //x

}
}

obj2.method()

const obj3= {
name: 'x',
std:3,
method: () => {

  console.log(this.std); //undefined

}
}

obj3.method()
