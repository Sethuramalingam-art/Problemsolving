swap the numbers without extra variables

var a = 5;
var b = 9;

a = a ^ b;
b = a^b;
a = a^b

console.log(a, b)


function add(a,b) {
while(b!==0) {

	var carry = a & b;
  a = a ^ b;
  b = carry<<1
} 
return a
}


function sub(a,b) {
	return add(a, add(~b,1));
}

console.log(sub(5,1));
