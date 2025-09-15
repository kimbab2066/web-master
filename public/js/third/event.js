let std = [
  { stdNo: 100, stdName: "kimkim", stdScore: 95 },
  { stdNo: 200, stdName: "parkpark", stdScore: 87 },
];
appendStd(std[0]);
appendStd(std[1]);

document.querySelector("button#addBtn").addEventListener("click", function () {
  let sno = document.querySelector("#std_no").value;
  let sname = document.querySelector("#std_name").value;
  let sscore = document.querySelector("#std_score").value;
  if ((sno == "") | (sname == "") | (sscore == "")) {
    alert("입력하세요");
    return;
  }
  std.push({ stdNo: sno, stdName: sname, stdScore: sscore });
  document.querySelector("#std_no").value = "";
  document.querySelector("#std_name").value = "";
  document.querySelector("#std_score").value = "";
  console.log(std);
  // stdList();
  appendStd({ stdNo: sno, stdName: sname, stdScore: sscore });
});

function stdList() {
  str = ``;

  std.forEach((x) => {
    str += `<tr>`;
    str += `<td>${x.stdNo}</td>`;
    str += `<td>${x.stdName}</td>`;
    str += `<td>${x.stdScore}</td>`;
    str += `</tr>`;
  });

  document.querySelector("#list tbody").innerHTML = str;
}
function appendStd(node) {
  const parent = document.querySelector("#list tbody");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const btn = document.createElement("button");

  td1.textContent = node.stdNo;
  td2.textContent = node.stdName;
  td3.textContent = node.stdScore;
  btn.textContent = "삭제";
  btn.className = "btn btn-danger";
  tr.addEventListener("click", showInfo);

  btn.addEventListener("click", function (e) {
    console.log("삭제 전:", std);
    e.target.closest("tr").remove();
    std = std.filter((x) => x.stdNo != node.stdNo);
    console.log("삭제 후:", std);
  });
  td4.appendChild(btn);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  parent.appendChild(tr);
}

//update
document.querySelector(".addBtn").addEventListener("click", function () {
  let lst = document.querySelectorAll("#list tbody tr");
  //찾을 학생
  let findStdNo = document.querySelector("#std_no").value;
  let changeScore = document.querySelector("#std_score").value;
  console.log(findStdNo, changeScore);
  lst.forEach((x, idx) => {
    // console.log(idx + 1 + "번째 목록 : ", x);
    if (findStdNo == x.children[0].innerHTML) {
      x.children[2].innerHTML = changeScore;
    }
  });
});

function showInfo(e) {
  let arr = [...e.target.parentElement.children].map((td) => td.innerHTML);
  // console.log(e.target.parentElement.children[0].innerHTML);
  // console.log(arr);
  document.querySelector("#std_no").value = arr[0];
  document.querySelector("#std_name").value = arr[1];
  document.querySelector("#std_score").value = arr[2];
}
