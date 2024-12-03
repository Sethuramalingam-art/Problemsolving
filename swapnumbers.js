swap the numbers without extra variables

var a = 5;
var b = 9;

a = a ^ b;
b = a^b;
a = a^b

console.log(a, b)
