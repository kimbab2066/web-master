let friend = {
  name: "kimkim",
  height: "176",
};
let friend2 = {
  name: "parkpark",
  height: "175",
};
let a;
let b;
let c;
if (friend.height > friend2.height) {
  [a, b] = [friend.name, friend2.name];
} else if (friend.height == friend2.height) {
  c = "동일하다";
} else {
  [a, b] = [friend2.name, friend.name];
}

// if (c != undefined) {
//   console.log(c);
// } else {
//   console.log(`${a}가 ${b}보다 크다`);
// }
// let n3 = prompt("숫자를 입력하세요: ");
// let res;
// if (n3 % 2 == 0) {
//   res = "짝수";
// } else {
//   res = "홀수";
// }
// console.log(res);
