function callFunc(x = 0, x2 = 0, anonymousFnc) {
  return anonymousFnc(x, x2);
}

let result = callFunc(10, 20, function (a, b) {
  return a + b;
});

const promise = new Promise(function (resolve, reject) {
  resolve("OK");
  reject("NO");
});

promise
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
