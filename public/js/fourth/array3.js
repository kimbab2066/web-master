const array = [{ name: "kim", phone: "010-2222-2222" }];
array.push({ name: "park", phone: "010-3333-3333" });
array.push({ name: "lee", phone: "010-4444-4444" });

// let search = prompt("친구 이름 입력: ");
// array.forEach((x) => {
//   if (x.name == search) {
//     console.log(`이름: ${x.name}\n연락처: ${x.phone}`);
//   }
// });

const maleArray = [];
data.forEach((arr) => {
  if (arr.gender == "Male") {
    maleArray.push(arr);
  }
});

const fruits = ["apple", "kiwi", "orange"];
fruits.sort((a, b) => a.length - b.length);
console.log(fruits);
