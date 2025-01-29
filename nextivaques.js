function test(){
        var i=10;
	if(i==10){
		b=20;
       }
       console.log(b);
}
test();
console.log(b);
================================================================================
let a = {};
let b = { key: "b" };
let c = { key: "c" };
 
a[b] = 123;
a[c] = 456;
 
console.log(a[b])

============================================================================
function doSomething(){
	console.log(this);
}
doSomething();

=======================================================================
var a=10;
function test(){

	console.log(a);

	var a=20;
   	console.log(a);
}
test();
console.log(a);
 =======================================================================
