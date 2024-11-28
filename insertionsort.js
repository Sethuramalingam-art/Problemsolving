function insSort(nums) {
	for (var i=1;i<nums.length;i++) {
  var key = nums[i]
    var j=i-1;
    
    while(j>=0 && nums[j]>key) {
    	nums[j+1]=nums[j];
      j=j-1;
    }
    
    nums[j+1]=key
  }
  return nums

}

console.log(insSort([4,3,8,2,1,-1]));
