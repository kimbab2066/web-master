let userValue;
let score = [];
while ((userValue = prompt("숫자 입력. 종료는 exit"))) {
  console.log(userValue);
  if (userValue == "exit") break;
  score.push(parseInt(userValue));
}
let total = score.reduce((a, b) => a + b, 0);
let avg = total / score.length;
let avg2 = (parseFloat(total) / score.length).toFixed(4);
console.log(`총 점수: ${total}`);
// console.log(`평균: ${avg}`);
console.log(`평균: ${avg2}`);

// let test;
// console.log(test);
