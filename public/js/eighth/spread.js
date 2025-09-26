const fruits = ["apple", "kiwi", "orange"];
const newArr = [...fruits];
const newArr2 = fruits;
newArr2.push("kimbab");
newArr.push("test");
// console.log(fruits, newArr, newArr2);

arr = [1, 2, 4, 5, 6, 7, 8, 8, 9, 5];
function sum(a = 0, b = 0, ...arr) {
  let res = a + b;
  for (val of arr) res += val;
  return res;
}
// console.log(sum(1, 2, 3, 4, 5, 6));

const friend = {
  name: "kim",
  age: 20,
};

const friend2 = friend;
const friend3 = { ...friend };
friend.age = 30;
friend3.name = "park";
console.log(friend, friend2, friend3);
