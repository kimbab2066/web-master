let fruits = ["apple", "peach", "watermelon"];
// console.log(fruits[0]);
fruits[0] = "test";
// console.log(fruits[0]);
// console.clear();
// fruits.forEach((x) => {
// console.log(x);
// });

let students = [
  { stdno: 100, stdname: "kim", score: 80 },
  { stdno: 101, stdname: "park", score: 90 },
  { stdno: 102, stdname: "lee", score: 88 },
];
let str = `<ul>`;
for (let i = 0; i < students.length; i++) {
  // console.log(students[i].stdname);
  str += `<li><td>${students[i].stdno}</td>`;
  str += `<td>${students[i].stdname}</td>`;
  str += `<td>${students[i].score}</td>`;
  str += `</li>`;
}
// document.writeln(str);
