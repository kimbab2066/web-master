function multiplication(x) {
  for (let i = 1; i < 10; i++) {
    console.log(`${x} * ${i} = ${x * i}`);
  }
}

function showMax(a, b) {
  console.log(`${a}와${b} 중 큰 값은 ${Math.max(a, b)}`);
}
function sumByToNumber(a, b) {
  if (a == b) return 0;
  let result = 0;
  [a, b] = [Math.min(a, b), Math.max(a, b)];
  for (let i = a; i <= b; i++) {
    result += i;
  }
  // let result = arr.reduce((a, b) => a + b, 0);
  console.log(`${a}부터 ${b}까지의 합 = ${result}`);
  return result;
}
// multiplication(4);
// showMax(50, 52);
result = sumByToNumber(5, 5);
console.log(`end result = ${result}`);
