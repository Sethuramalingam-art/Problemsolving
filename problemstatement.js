var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const recusrsionFunc = function (obj, list) {
  for (var i = 0; i < list.length; i++) {
    if (Object.keys(obj[list[i]]).length !== 0) {
      return recusrsionFunc(
        obj[list[i]],
        list.filter((item) => item !== list[i])
      );
    } else {
      return obj[list[i]];
    }
  }
};
const findPath = (obj, path) => {
  
  var list = path.split(".");

  return recusrsionFunc(obj, list);
};

findPath(obj, "a.b.c"); // 12

console.log(findPath(obj, "a.b.c")); // 12

console.log(findPath(obj, 'a.b')); // {c: 12, j: false}

console.log(findPath(obj, 'a.b.d')); // undefined

console.log(findPath(obj, 'a.c')); // undefined

console.log(findPath(obj, 'a.b.c.d')); // undefined

console.log(findPath(obj, 'a.b.c.d.e')); // undefined

console.log(findPath(obj, 'a.b.j')); //false

console.log(findPath(obj, 'a.b.j.k')); //undefined

console.log(findPath(obj, "a.k")); //null
