. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


var searchRange = function(nums, target) {
    const binarySearch = function(nums, target, isSearchingLeft) {
        var low = 0;
        var high = nums.length-1;
        var idx = -1;

        while(low<=high) {
            var mid = low+Math.floor((high-low)/2);

            if (nums[mid]>target) {
                high=mid-1
            } else if (nums[mid]<target) {
                low=mid+1
            } else {
                idx=mid
                if (isSearchingLeft) {
                    high=mid-1
                } else {
                    low=mid+1
                }
            }
        }
        return idx
        

    }
