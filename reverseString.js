var at = 'str'


function reveStr(at) {
	var revStr='';
  
  for (var i=0;i<at.length;i++) {
 
  revStr =at.charAt(i)+revStr
   console.log(revStr);
  }
  return revStr
}


console.log(reveStr(at));
