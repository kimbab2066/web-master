for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 0; j < i; j++) str += "*";
  console.log(str);
}
console.log("\n");

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 0; j < 5 - i + 1; j++) str += "*";
  console.log(str);
}

console.log("\n");
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j < i; j++) str += " ";
  for (let j = 0; j < 5 - i + 1; j++) str += "*";
  console.log(str);
}
