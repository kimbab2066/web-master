let obj = {};
let obj2 = obj;
// console.log(obj, obj2, obj == obj2);
let obj3 = {};

obj.name = "kim";
obj["age"] = 20;
obj3.name = "kim";
obj3["age"] = 20;

// console.log(obj, obj3, obj == obj3);

let s = "kim";
let s2 = "kim";
// console.log(s, s2, s == s2);
// console.log(obj.name == obj3.name);
let arr = [];
str1 = 10;
str2 = "10";

// console.log(str1 === str2);
// function sum(a, b) {
//   return a + b;
// }
const sum = function (a, b) {
  return a + b;
};
const sum2 = (a = 0, b = 0) => a + b;

// [25, 6, 7, 30].forEach((x) => console.log(x));
console.log(sum2(1));
