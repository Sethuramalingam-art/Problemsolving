function getMissingNo(arr, N) {
  var sortedArr = arr.sort((a, b) => a - b);

  var i = 0;
  var j = i + 1;
  var resultArr = [];
  while (j < N) {
    if (sortedArr[i] + 1 === sortedArr[j]) {
      i++;
      j++;
    } else {
      resultArr.push(sortedArr[i] + 1);
      // this if condition is for continous not found numbers in array
      if (
        sortedArr.filter((item) => item === resultArr[resultArr.length - 1] + 1)
          .length === 0
      ) {
        resultArr.push(resultArr[resultArr.length - 1] + 1);
      }
      i++;
      j++;
    }
  }
  return resultArr;
}

var arr = [9, 8, 10, 12, 14, 16];
var N = arr.length;
console.log(getMissingNo(arr, N));
