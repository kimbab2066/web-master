//1~10까지 합 => 합이30보다 크면 출력
// let a = 0, b = 0;

// for (let i = 1; i < 101; i++) {
//   if (i % 2 == 0) {
//     a += i;
//   }
//   if (i % 3 == 0) {
//     b += i;
//   }
// }
// console.log(`2의 배수 = ${a} 3의 배수 = ${b}`)
// console.log(`result = ${sum}`);
const arr = [],
  sum2 = [],
  sum3 = [];
for (let i = 0; i < 100; i++) {
  let x = parseInt(Math.random() * 10) + 1;
  arr.push(x);
  if (x % 2 == 0) {
    sum2.push(x);
  }
  if (x % 3 == 0) {
    sum3.push(x);
  }
}
console.log(arr, sum2, sum3);

console.log(
  `2의 배수의 합 = ${sum2.reduce((a, b) => a + b, 0)} 
  \n3의 배수의 합 = ${sum3.reduce((a, b) => a + b, 0)}`
);
