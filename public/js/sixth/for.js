const arr = [10, 20, 40, 30, 50];

let sum = 0;
for (x of arr) {
  sum += x;
}

let std = { sno: 100, name: "kim", score: 80 };

for (prop in std) {
  console.log(prop, std[prop]);
}
