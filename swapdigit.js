//Largest number with one swap allowed

function swap(num) {
	var maxdigit=-1;
  var maxdigitindex=-1;
  var ldigit=-1;
  var rdigit=1;
  
  var numsdigit = num.toString().split('');
  for (let i=numsdigit.length-1;i>=0;i--) {
  	if (numsdigit[i]>maxdigit) {
    maxdigit=numsdigit[i]
    maxdigitindex=i
    
    }
    
    if (numsdigit[i]<maxdigit) {
    	ldigit=i
      rdigit=maxdigitindex
    }
    }
    if (ldigit == -1) {
return num;
}
 
[numsdigit[ldigit], numsdigit[rdigit]] = [numsdigit[rdigit], numsdigit[ldigit]];
 
return parseInt(numsdigit.join(''));
  

}

console.log(swap(2736))
