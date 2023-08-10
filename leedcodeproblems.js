1. Given a sorted array of distinct integers and a target value, return the index if the target is found. 
  If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

  
var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var mid;
    while(left<=right) {
        mid = left + Math.floor(right-left/2);
        if (nums[mid]===target) {
            return mid
        } else if (nums[mid]<target) {
            left = mid+1
        } else {
            right = mid - 1
        }
    }

    return right +1 
};
======================================================================================

  Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

  Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

var mySqrt = function(x) {
    var start = 0;
    var end = x-1;
    var mid;
    if (x===0) return 0;
    if (x <= 3 ) return 1; 
    while(start<=end) {
        mid = Math.floor(end-start/2)
        if (mid*mid===x) {
            return mid
        } else if (mid*mid < x) {
            start = mid + 1
        } else {
            end = mid -1
        }
    }
    return mid 
};
