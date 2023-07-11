function missing(arr) {
  let temp = [];
  for (var i = 0; i < arr.length; i++) {
    temp[i] = 0;
  }
  for (var i = 0; i < arr.length; i++) {
    temp[arr[i] - 1] = 1;
  }
  console.log(temp);

  let ans = 0;
  for (var i = 0; i < arr.length; i++) {
    if (temp[i] === 0) {
      ans = i + 1;
    }
  }
  return ans;
}

console.log(missing(arr)); // this solution is only for [0,1,2,5,4,5]
