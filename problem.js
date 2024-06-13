// var arr = [-3, 2, 3, 3, 8, 15];

// function findTarget(arr, target) {
//   var start = 0;
//   var end = arr.length - 1;
//   var result = [];

//   while (start < end) {
//     if (arr[start] + arr[end] > target) {
//       end--;
//     } else if (arr[start] + arr[end] < target) {
//       start++;
//     } else {
//       result.push(start);
//       result.push(end);
//       break;
//     }
//   }
//   return result;
// }

// console.log(findTarget(arr, 6));
// var maximumProduct = function (nums) {
//   var ans = 1;
//   var loop = 1;
//   var temp;
//   for (var i = 0; i < nums.length; i++) {
//     nums[i] = Math.abs(nums[i]);
//   }
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//   }

//   while (loop <= 3) {
//     ans = ans * nums[nums.length - loop];
//     loop++;
//   }
//   return ans;
// };

// console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));

// var findTheDifference = function (s, t) {
//   for (var letter of s) {
//     console.log(letter);
//     t = t.replace(letter, "w");
//   }
//   return t;
// };

// console.log(findTheDifference("abcd", "abcde"));

var sortSentence = function (s) {
  console.log(s.split(" "));
  const spltArray = s.split(" ");
  //console.log(spltArray[0].charAt(spltArray[0].length - 1));
  const res = bubbleSort(spltArray);
  console.log(res);
  const res1 = res.map((element) => {
    return element.substring(0, element.length - 1);
  });

  return res1.join(" ");
};

var bubbleSort = function (spltArray) {
  var temp;
  for (var i = 0; i < spltArray.length; i++) {
    for (var j = 0; j < spltArray.length - 1; j++) {
      if (
        Number(spltArray[i].charAt(spltArray[i].length - 1)) <
        Number(spltArray[j].charAt(spltArray[j].length - 1))
      ) {
        temp = spltArray[i];
        spltArray[i] = spltArray[j];
        spltArray[j] = temp;
      }
    }
  }
  return spltArray;
};

console.log(sortSentence("Myself2 Me1 I4 and3"));
