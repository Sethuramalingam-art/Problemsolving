/**
 * @param {string} s
 * @return {boolean}
 */

function isAlpha(x) {
         const y = x.charCodeAt(0)
         return (y >= 65 && y <= 90) || (y >= 97 && y <= 122) || (y >= 48 && y <= 57) 
}

var isPalindrome = function(s) {
     var strArr = s.split('');
    var res = []
    for(var i=0;i<strArr.length;i++) {
        if (isAlpha(strArr[i])) {
            res.push(strArr[i])
        }
    }

    var left = 0;
    var right = res.length-1;
    
      while(left<right) {
        if (res[left].toLowerCase()!==res[right].toLowerCase()) {
            return false
        }
        
        left++
        right--
    }
    
  
    return true


}
    


    
};
