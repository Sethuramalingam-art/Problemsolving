var arr = [3, 3, 3, 1, 2, 1, 5, 2, 6, 3, 6, 7, 12, 12, 12];
console.log(arr.find((item) => item === 12));
console.log([...new Set(arr)]);

const arr1 = arr.reduce((acc, cum) => {
  return acc.find((item) => item === cum) ? acc : [...acc, cum];
}, []);

console.log(arr1);
