const a = '1122222222333333399' 
console.log(a);
const b= '11222222223333333111'

function add(a,b) {
  var num1 = a.split('');
  var num2 = b.split('');  
  var remainingNumber = 0;  
  if (num1.length!== num2.length) {  
   var remainingNumberFun = function (num1, num2){
            return Math.abs(num1 - num2);
         }  
  }
  remainingNumber = remainingNumberFun(num1.length, num2.length);     
  for (var j=0;j<remainingNumber;j++) {
      if (num1.length<num2.length){
        num1.unshift('0')
    } else {
    num2.unshift('0')
    }
  }  
  var resultArr = [];
      var sum =0;
    var carry =0;
  for (var i=num1.length-1;i>=0;i--) {      
         sum = Number(num1[i])+Number(num2[i]) + carry;
   
      if (sum>=10) {
          carry = 1;          
      } else {
          carry = 0;
      }
      sum = sum%10
      resultArr.push(sum);      
  }
  
resultArr = resultArr.reverse('').join('');
}
