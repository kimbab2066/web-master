//createElement()
//appendChild()
//innerText, innerHTML, textContent
let std = [
  { stdNo: 100, stdName: "kimkim", stdScore: 95 },
  { stdNo: 200, stdName: "parkpark", stdScore: 87 },
];

const sNo = document.querySelector("#std_no");
const sName = document.querySelector("#std_name");
const sScore = document.querySelector("#std_score");
const btn = document.querySelector("#addBtn");
const btn2 = document.querySelector(".addBtn");
btn.addEventListener("click", addBtn);
btn2.addEventListener("click", updateBtn);

function stdList() {
  // for (let prop in std[0]) {
  //   console.log(prop, std[0][prop]);
  // }
  std.forEach((x) => {
    const tbody = document.querySelector("#list tbody");
    let tr = makeTr(x);
    tbody.appendChild(tr);
  });
}

function removeBtn(e) {
  e.target.closest("tr").remove();
  std = std.filter((x) => x.stdNo != e.stdNo);
}

function makeTr(x) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const btn = document.createElement("button");
  btn.innerHTML = "삭제";
  btn.addEventListener("click", removeBtn);
  btn.setAttribute("class", "btn btn-danger");
  // btn.className = "btn btn-danger";
  td1.setAttribute("class", "student-no");
  td1.innerHTML = x.stdNo;
  td2.innerHTML = x.stdName;
  td3.innerHTML = x.stdScore;
  td4.appendChild(btn);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.addEventListener("click", showInfo);
  return tr;
}

//배열과 컴포넌트에 추가
function addBtn() {
  x = { stdNo: sNo.value, stdName: sName.value, stdScore: sScore.value };
  std.push(x);
  const tbody = document.querySelector("#list tbody");
  let tr = makeTr(x);
  tbody.appendChild(tr);
  console.log("추가 후 배열 상태: ", std);
}
//배열과 컴포넌트에 수정
function updateBtn() {
  let target = {
    stdNo: sNo.value,
    stdName: sName.value,
    stdScore: sScore.value,
  };
  std.forEach((x, idx) => {
    console.log("x:", x);
    console.log("target:", target);
    if (x.stdNo == target.stdNo) {
      // console.log("변경 전: ", std);
      std[idx] = target;
      // sNo.value = "";
      // sName.value = "";
      // sScore.value = "";
      updateRow(idx, target);
      // console.log("변경 후: ", std);
      return;
    }
  });
}
function updateRow(idx, target) {
  const row = document.querySelectorAll(".student-no")[idx].closest("tr");
  // console.log("row, idx = ", row, idx);
  const values = row.children;
  values[0].textContent = target.stdNo;
  values[1].textContent = target.stdName;
  values[2].textContent = target.stdScore;
  console.log(`${target.stdNo} 학생의 행이 화면에서 업데이트되었습니다.`);
}

function showInfo(e) {
  const arr = [...e.target.parentElement.children].map((x) => x.innerHTML);
  sNo.value = arr[0];
  sName.value = arr[1];
  sScore.value = arr[2];
  // console.log(arr);
}

stdList();
