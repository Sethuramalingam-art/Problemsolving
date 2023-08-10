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
