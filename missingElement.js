//using hashmap method
function missElement(arr, N) {
  let i;
  let temp = [];
  for (i = 0; i <= N; i++) {
    temp[i] = 0;
  }

  for (i = 0; i < N; i++) {
    temp[arr[i] - 1] = 1;
  }

  let ans = 0;
  for (i = 0; i <= N; i++) {
    if (temp[i] == 0) ans = i + 1;
  }
  console.log(ans);
}

var x = [9, 10, 12, 13]; // find missing element => 4

console.log(missElement(x, x.length));
