//split ann array into two equl sum
var arr=[1 , 2 , 3 , 4 , 5 , 5];

function subArraySum(arr) {
	var leftSum =0;
  
  for (var i=0;i<arr.length;i++) {
  	leftSum+=arr[i];
  }
  console.log(leftSum);
  var rightSum=0;
  
  for (var i=arr.length-1;i>0;i--) {
  	rightSum+=arr[i]
    leftSum-=arr[i]
    console.log(rightSum);
      
  if (rightSum===leftSum) {
  	return i
  }

  }
  return -1
}


function spliArr(arr) {
	var resIndex=subArraySum(arr);
  console.log(resIndex);
  var resArr1=[];
  var resArr2=[];
  
  for(var t=0;t<arr.length;t++) {
  	
  	if(t>=resIndex) {
    	 resArr2.push(arr[t]);
       
    } else {
    resArr1.push(arr[t]);
    }

  }
  
  return {resArr1, resArr2}
}

console.log(spliArr(arr));
