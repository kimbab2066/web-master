console.log(this);
// localStorage.clear();

if (!localStorage.getItem("students")) {
  let students = [
    { sno: 100, sname: "kim", sscore: 80 },
    { sno: 101, sname: "park", sscore: 85 },
    { sno: 102, sname: "lee", sscore: 77 },
  ];
  localStorage.setItem("students", JSON.stringify(students));
}

function load() {
  document.querySelector(".data-container").innerHTML = "";
  const arr = JSON.parse(localStorage.getItem("students"));
  arr.forEach((x) => {
    const div = document.createElement("div");
    div.setAttribute("class", "data-item");
    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "item-info");
    for (prop in x) {
      const span = document.createElement("span");
      span.innerHTML = x[prop];
      infoDiv.appendChild(span);
    }
    div.appendChild(infoDiv);
    //수정화면으로 이동하는 버튼
    const modifyBtn = document.createElement("button");
    modifyBtn.innerHTML = "수정";
    modifyBtn.addEventListener("click", function modifyBtnClick(e) {
      //search : sno 저장
      console.log("data test: ", x.sno);

      localStorage.setItem("search", x.sno);
      location.href = "update.html";
    });

    div.appendChild(modifyBtn);
    document.querySelector("#data-container").appendChild(div);
  });
}
function modifyBtnClick(x, e) {
  //search : sno 저장
  localStorage.setItem("search", x.sno);

  location.href = "update.html";
}
function submitBtn(e) {
  e.preventDefault();
  const [sno, sname, sscore] = Array.from(
    document.querySelectorAll(".student-form input")
  ).map((x) => x.value);
  // const sno = document.getElementById("sno").value;
  // const sname = document.getElementById("sname").value;
  // const sscore = document.getElementById("sscore").value;
  if (sno == "" || sname == "" || sscore == "") {
    return;
  }
  let val = JSON.parse(localStorage.getItem("students"));
  val.push({ sno, sname, sscore });
  localStorage.setItem("students", JSON.stringify(val));
  console.log("storage TEST:", sno, sname, sscore);
  console.log(JSON.parse(localStorage.getItem("students")));

  load();
}

load();
//현재 값 불러오기
document.querySelector(".student-form").addEventListener("submit", submitBtn);
