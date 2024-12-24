//sum of subarray between the indexes // sliding window

var arr = [4,5,6,2,3,4,7,9,0] //find the indexes for sum of 11 // o/p is [2,3]


function sumOfSubArray(arr, k=11) {
  var start=0;
  var last = 0;
  var fl = false;
  var res = [];
  var tempSum=0;
  
  for (var i=0;i<arr.length;i++) {
  	  tempSum+=arr[i];
      
      if (tempSum>= k) {
      last=i;
      while(k<tempSum && start<last) {
      tempSum-=arr[start];
      ++start
      
      
      }
      
      if (tempSum===k) {
      res.push(start+1);
      res.push(last+1);
      fl=true;
      break
      }
      
      
      }

  }
  
   if (!fl) {
        res.push(-1);
        }
        return res
    
}

console.log(sumOfSubArray(arr));
