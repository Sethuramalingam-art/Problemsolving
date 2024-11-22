function bubSort(arr) {
	var swapped = false;
  
  for (var i=0;i<arr.length-1;i++) {
  for (var j=0;j<arr.length-i-1;j++) {
  	if (arr[j]>arr[j+1]) {
    [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
    swapped=true
    }
    while(!swapped) { break}
  }
  }
  return arr
}

console.log(bubSort(arr));
