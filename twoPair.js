const numbers = [-6, -3, 1, 2, 3, 4, 5, 7]; // find two point sum = 0;

function sumPair(arr) {
  var start = 0,
    end = arr.length - 1,
    sum = 0;
  while (start < end) {
    sum = arr[start] + arr[end];
    if (sum === 0) {
      return start + `+` + end;
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
}

console.log(sumPair(numbers));
