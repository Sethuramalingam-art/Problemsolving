var test = ["hi", "test", "hi", "hello", "name"];

function exce(test) {
  var arr = test.reduce((acc, cum) => {
    acc[cum] = acc[cum] ? (acc[cum] += 1) : (acc[cum] = 1);
    return acc;
  }, {});
  return arr;
}

///{ hi: 2, test: 1, hello: 1, name: 1 }
