let name = "kim";
let age = 20;
// console.log(`이름은 ${name == "kim"} 나이는 ${age == 20 ? "성인" : "미성년자"}`);

const friends = ["kimeeee", "park", "lee"];
// friends.forEach((x) => {
//   console.log(x.indexOf("ee"));
// });

const food = ["pizza", "chicken", "kimchi"];
// console.log(food.slice(0, 2));
// console.log(food.slice(-1, 0));
// console.log((food[0] = food[0].replace("p", "kkk")));
// console.log(food);
// console.log("    deak ".trim());

const num = ["999999-9999999", "888888-8888888", "7777777777777"];
const email = [
  "kimkim@gmail.com",
  "leelee@gmail.com",
  "parkpark@gmail.com",
  "choichoi@gmail.com",
];
//성별 판별 함수
function getGender(no) {

  if (no.length == 13) return no[6] % 2 == 0 ? "여" : "남";
  else return no[7] % 2 == 0 ? "여" : "남";
}

//사용자 아이디 확인
function getId(mail) {
  const arr = mail.split("@");
  return arr[0];
}

num.forEach((element) => {
  console.log(element, getGender(element));
});

email.forEach((element) => {
  console.log(element, getId(element));
});
