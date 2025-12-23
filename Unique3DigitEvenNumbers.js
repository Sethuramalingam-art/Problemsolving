/**
 * @param {number[]} digits
 * @return {number}
 You are given an array of digits called digits. Your task is to determine the number of distinct three-digit even numbers that can be formed using these digits.

Note: Each copy of a digit can only be used once per number, and there may not be leading zeros.

 

Example 1:

Input: digits = [1,2,3,4]

Output: 12

Explanation: The 12 distinct 3-digit even numbers that can be formed are 124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, and 432. Note that 222 cannot be formed because there is only 1 copy of the digit 2.

Example 2:

Input: digits = [0,2,2]

Output: 2

Explanation: The only 3-digit even numbers that can be formed are 202 and 220. Note that the digit 2 can be used twice because it appears twice in the array.

Example 3:

Input: digits = [6,6,6]

Output: 1

Explanation: Only 666 can be formed.
 */
var totalNumbers = function(digits) {
    var res= new Set();
    var n = digits
    var len=n.length
    for (var i=0;i<len;i++) {
      if(n[i]===0) continue;
      for (var j=0;j<len;j++) {
        if(j===i) continue
        for(var k=0;k<len;k++) {
          if(k===j || k===i) continue 
          if(n[k]%2===0) {
            const num = n[i] * 100 + n[j] * 10 + n[k];
            res.add(num)
          }
        }
      }
    }
    return [...res].length
};
