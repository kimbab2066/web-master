document.querySelectorAll("table").forEach((x) => x.remove());

// let str = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas officiis maxime eos nihil doloribus cumque fuga temporibus tempore suscipit labore?`;
let str = `eeee aaaa bbbb cccc`;

let arr = str.split(/[ -]/);
let outer = document.querySelector("div.outer");
arr.forEach((x) => {
  let div = document.createElement("div");
  div.innerHTML = x;
  div.setAttribute("class", "inner");
  outer.appendChild(div);
});
console.log(arr);

const btn = document.querySelector("#searchWord");
btn.addEventListener("click", find);
const input = document.querySelector("#user_value");
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") find();
});

function find() {
  console.log("전", arr);
  let findValue = document.querySelector("#user_value").value;
  document.querySelectorAll("div.inner").forEach((x) => {
    if (x.innerHTML == findValue) {
      x.remove();
      arr = arr.filter((x) => x != findValue);
    }
    // console.log(x.innerHTML, findValue, x.innerHTML == findValue);
  });
  console.log("후", arr);

  document.querySelector("#user_value").value = "";
  console.log(arr.length);

  // console.log(arr.includes(findValue) ? "O" : "X");
}

let time = 60;
const interval = setInterval(function () {
  // if () clearInterval(interval);
  if (arr.length == 0 || time == 0) {
    if (time != 0) alert("success");
    else alert("fail");
    clearInterval(interval);
  }
  console.log(time--);
}, 100);
