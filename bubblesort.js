var x = [4, 2, 6, 5, 18, 2, 34, 9];

//sort the array

// function sort() {
//   return x.sort((a, b) => a - b); // asc order
//   return x.sort((a, b) => b - a); // desc order
// }

// console.log(sort());

// using bubble sort O(N2)

function bubbleSort(arr, n) {
  var temp;
  for (var i = 0; i < n - 1; i++) {
    var swaped = false; 
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swaped = true;
      }
    }
    if (swaped === false) break; // inner for loop will check every numbers are in sorted if swaped is again a false after inner loop execution break the oute loop because it is alreayd in sorted 
  }

  return arr;
}

var n = x.length;
console.log(bubbleSort(x, n));

