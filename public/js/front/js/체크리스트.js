const arr = [];
const myInput = document.querySelector("#item");
const ulList = document.querySelector("#ulList");

function init() {
  document.querySelector("#add").addEventListener("click", addItem);
}

function addItem(e) {
  const item = document.querySelector("#item");
  if (item.value.trim() == "") {
    alert("입력해주세요.");
    return;
  } else if (arr.includes(item.value)) {
    alert("중복된 입력입니다.");
    item.value = "";
    item.focus();
    return;
  }
  console.log("추가 전 ", arr);
  arr.push(item.value);
  const newLi = makeLi(item.value);
  ulList.appendChild(newLi);

  console.log("추가 후 ", arr);

  item.value = "";
  item.focus();
}

function makeLi(itemValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.textContent = itemValue;
  span.textContent = "X";
  span.className = "close";
  span.addEventListener("click", removeItem);
  li.appendChild(span);
  return li;
}

function removeItem(e) {
  console.log("삭제 전 ", arr);
  e.target.parentNode.remove();
  const target = e.target.parentNode.firstChild.textContent;
  const idx = arr.indexOf(target);
  arr.splice(idx, 1);
  console.log("삭제 후 ", arr);
}

//start
init();
