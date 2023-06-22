//Set - duplicate keys not allowed in SET

function removeDuplicate(arr, key) {
  const set1 = new Set();
  const filtered = arr.filter((item) => {
    const reduntantValue = item[key];
    console.log(reduntantValue);
    const isDup = set1.has(reduntantValue);

    console.log(isDup);
    set1.add(reduntantValue);
    console.log(set1);
    return !isDup;
  });
  set1.clear();
  return filtered;
}

var arr1 = [
  { name: "sethu", id: 1 },
  { name: "saran", id: 2 },
  { name: "magi", id: 3 },
  { name: "tamil", id: 4 },
  { name: "chellu", id: 1 },
  { name: "seetha", id: 2 },
  { name: "sachin", id: 3 },
];

console.log(removeDuplicate(arr1, "id"));
