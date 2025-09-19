const person = {
  name: "kim",
  age: 20,
};

let { name, age } = person;
const arr = [20, 30, 50];

let [n1, n2] = arr;

let persons = [
  { sno: 100, name: "kim", score: 80 },
  { sno: 101, name: "park", score: 90 },
  { sno: 102, name: "lee", score: 88 },
];

// const newArr = persons.filter((x) => x.score > 80);
const newArr = persons.map((x) => {
  const { sno: no, name: user } = x;
  return { no, user };
});
console.log("obj", newArr);
