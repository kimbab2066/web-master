const names = ["kim", "park", "lee", "choi", "kimkim"];

const result = names.filter((x) => x.includes("kim"));
// console.log(result);

const num = [22, 44, 55, 67, 8, 3, 35];
const evenNumber = num.filter((x) => x % 2 == 0);
// console.log(evenNumber);

const std = [
  { sno: 100, name: "kim", score: 80 },
  { sno: 101, name: "lee", score: 89 },
  { sno: 102, name: "park", score: 76 },
  { sno: 103, name: "choi", score: 66 },
];

const passed = std
  .map((x) => {
    const { sno: no, name } = x;
    let chk = x.score >= 70 ? "pass" : "fail";
    // console.log(no, name, chk);
    return { no, name, chk };
  })
  .filter((x) => x.chk == "pass")
  .forEach((x) => {
    console.log(x);
  });
