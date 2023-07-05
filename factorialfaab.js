function fabnocci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fabnocci(num - 1) + fabnocci(num - 2);
}

console.log(fabnocci(3)); // 1

//1, 2, 3
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fact(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
