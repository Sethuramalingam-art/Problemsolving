//longest substring without non repeating strings

const str = 'abcadee';


function longestSubString(str) {
	var start = 0;
  var end = 0;
  var maxLen = Math.min(str.length, 1);
  
  var seen = new Map();
  
  while(end<str.length) {
  	var char = str.charAt(end);
    
    while(seen.has(char)) {
      seen.delete(char);
    	start+=1
    }
    
    seen.set(char, 0);
    var windowSize = end-start+1;
    maxLen = Math.max(maxLen, windowSize);
    end+=1;
    
  }
  
  var res = ''
  
  for (var i of seen) {
  	res+=i
  }
  
  return maxLen
}

console.log(longestSubString(str));
