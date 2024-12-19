//print arr items without using loops

var arr = ['sar', 'ras', 'd','e'];


function recursion(arr) {
if (arr.length>0) {
	console.log(arr[0]);
}
recursion(arr.slice(1));	
}
recursion(arr);
