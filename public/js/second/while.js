let i = 0;
// while (i < 10) {
//   i += 1;
//   console.log(`i의 값: ${i}`);
// }

while (true) {
  let k = parseInt(Math.random() * 10);
  if (k == 0) break;
  console.log(`임의의 값: ${k}`);
}
console.log("end");
