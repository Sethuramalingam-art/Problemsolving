var arr123 = [
  { name: "aaa", san: 12 },

  { name: "aaa", san: 18 },

  { name: "aaa", san: 2 },

  { name: "bbb", san: 33 },

  { name: "bbb", san: 44 },

  { name: "aaa", san: 100 },
];

// Output: [
//   { name: "aaa", san: [12, 18, 2, 100] },

//   { name: "bbb", san: [33, 44] },
// ];

function forLoopfunc(arr) {
  var arr1 = [];

  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      var obj1 = {
        name: arr[i].name,
        san: [...[], arr[i].san],
      };
      arr1.push(obj1);
    } else {
      if (arr1.filter((item) => item.name === arr[i].name).length !== 0) {
        arr1
          .filter((item) => item.name === arr[i].name)?.[0]
          ?.san.push(arr[i].san);
      } else {
        arr1.push({ name: arr[i].name, san: [...[], arr[i].san] });
      }
    }
  }
  console.log(arr1);
}

console.log(forLoopfunc(arr123));
