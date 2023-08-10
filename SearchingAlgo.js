var arr1 = [34, 5, 2, 3, 4, 9, 7, 18, 20];
var key = 18;

//binary search works at sorting the array's
function binarySearch(arr, key) {
  var sortedArr = arr.sort((a, b) => a - b);
  var left = 0;
  var right = sortedArr.length - 1;
  var mid;
  while (right >= left) {
    mid = left + Math.floor(right - left / 2);

    if (arr[mid] === key) {
      return arr[mid];
    } else if (arr[mid] > key) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return arr[mid];
}

console.log(binarySearch(arr1, key));
// Time Complexity: O(log N)
// Auxiliary Space: O(1)

//if recurrsion means

function recursiveBinarySearch(arr, key, left, right) {
  var sortedArr = arr.sort((a, b) => a - b);
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    if (sortedArr[mid] === key) {
      return sortedArr[mid];
    } else if (sortedArr[mid] > key) {
      return recursiveBinarySearch(sortedArr, key, left, mid - 1);
    } else {
      return recursiveBinarySearch(sortedArr, key, mid + 1, right);
    }
  }
}

console.log(recursiveBinarySearch(arr1, key, 0, arr1.length - 1));
