let user_id = "test";
let user_age = 20;
let is_child = false;
function show_info() {
  console.log("your name is : " + user_id);
}
// show_info();
function changeH3() {
  document.querySelector("h3#hello").innerHTML = "Yes";
}
function changeValue() {
  let score = document.querySelector("#user_value").value;
  score = parseInt(score);
  let res;
  console.log(score);
  switch (true) {
    case score >= 90:
      res = "very good";
      break;
    case score >= 80:
      res = "good";
      break;
    case score >= 70:
      res = "soso";
      break;
    case score >= 60:
      res = "bad";
      break;
    default:
      res = "Fail";
  }
  console.log(res);
}
