/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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

    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false);

    return [left, right]
};
