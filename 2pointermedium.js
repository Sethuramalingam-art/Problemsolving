Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).



var removeDuplicates = function(nums) {
    var k=nums.length;
    var l = 0;
    var mid = l+1;
    var r= mid+1;

    while(r<k) {
        if (nums[l]===nums[mid] && nums[mid]===nums[r]) {
            nums[r]='_';
            k--
            r++
        } else if (nums[l]===nums[mid] && nums[mid]!==nums[r]) {
            l=r;
            mid=l+1;
            r=mid+1
        }
    }
    
    let i=0;
    let j=i+1

    while(j<nums.length) {
        if (nums[i]==='_'&&nums[j]!=='_') {
            [nums[i], nums[j]]=[nums[j], nums[i]]
            i++
            j++
        } else if (nums[i]==='_'&&nums[j]==='_') {
            j++
        } else {
            i++
            j++
        }
    }
    return k
};
