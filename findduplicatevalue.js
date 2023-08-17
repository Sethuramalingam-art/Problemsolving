Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
var findDuplicate = function(nums) {
    var map = new Map();
    var count = 0;
    for (var i=0;i<nums.length;i++) {
        if (map.get(nums[i]) !== undefined) {
            map.set(nums[i], map.get(nums[i])+1)
        } else {
            map.set(nums[i], count + 1);
        }
    }
    for (let [key, value] of map) {
        if (value > 1) {
            return key
        }
    }
};
