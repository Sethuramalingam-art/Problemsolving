//find first non repeated string in the statement
var str = "Java developers are jool Dudes";

function findRepeatChar(str) {
  let strArr = str.split("");
  let map = new Map();
  let count = 1;
  for (let i = 0; i < strArr.length; i++) {
    if (map.get(strArr[i]) !== undefined) {
      map.set(strArr[i], map.get(strArr[i]) + 1);
    } else {
      map.set(String(strArr[i]).toLocaleLowerCase(), count);
    }
  }

  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return map;
}

console.log(findRepeatChar(str));
