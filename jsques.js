const mu = () => {
	console.log(arguments[0]*arguments[1])
}

mu(4,null); // reference error because arrow functions don't have its own arguments


function mu() {
	console.log(arguments[0]*arguments[1])
}

mu(4,5) // 20
mu(null,5) // 0 becasue null value 0 if function is for addition so 5
mu(undefined,5) //NaN


console.log({}=={}); // false
console.log({}==={}); // false
console.log([]==[]); // false
console.log([]===[]); // false
console.log(['9']===['9']); // false
console.log(['9']==['9']); // false
console.log({'a':2}=={'a':2}); // false
console.log({'s':3}=={'s':3});// false 

typeof []
'object'
typeof {}
'object'

The difference between primitive and non-primitive data types is that:

primitive data types are compared by value.
non-primitive data types are compared by reference.

please read this: https://www.freecodecamp.org/news/javascript-comparison-operators-how-to-compare-objects-for-equality-in-js/
