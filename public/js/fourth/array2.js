const array = new Array();
array.push(1);
array.push(10);
array.unshift(25);
array.splice(1, 0, 22, 19);

let n = array.length;
let sum = 0;
console.log("array = ", array);
array.forEach((x, idx) => {
  if (idx == 0 || idx == n - 1) {
    sum += x;
  }
});
console.log("array = ", array);
console.log(`합계: ${sum}`);

array.forEach((element) => {});
