let n1 = 50;
let PI = Math.PI;
console.log(PI);
function plus(a, b) {
  console.log(a + b);
  return a + b;
}
{
  let n1 = 5050;
  console.log(`local: ${n1}`);
}
console.log(`global: ${n1}`);

function varFunc() {
  let n1 = 100;
  console.log(`local: ${n1}`);
}
console.log(`global: ${n1}`);
varFunc();
