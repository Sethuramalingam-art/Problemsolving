let arr = [ 2,5,0,6,1,0,9,0]

// [2,0,5,6,1,0,9,0]
// o/p = [0,0,0,2,5,6,1,9]



// two pointer

function order(arr) {
  var temp=[];
  var count=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]!==0){
      temp.push(arr[i]);
    } else {
      count++
    }
  }
  console.log(arr);
  for (var i=0;i<count;i++) {
    arr[i]=0
  }
  console.log(arr);
  for(var i=count,k=0;i < arr.length; i++, k++){
    arr[i]=temp[k]
  }
   return arr
}

console.log(order(arr));
