//기능목록: 추가, 삭제, 선택(체크, 밑줄)
const myInput = document.querySelector("#myInput");
const addBtn = document.querySelector(".addBtn");
const myUL = document.querySelector("#myUL");
const listItems = document.querySelectorAll("#myUL li");

// addBtn.addEventListener('click', newElement);

/**
 * 거의 쓰지 말 것
 */
function cloneTest() {
  const cloned = document.querySelector("#myUL>li").cloneNode(true);
  const spand = cloned.querySelector("span");
  cloned.innerHTML = myInput.value;
  cloned.appendChild(spand);
  console.log(cloned);
  // myUL.appendChild(cloned);
}

function init() {
  listItems.forEach((item) => addCloseEvent(item));

  myUL.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
      console.log("close선택: ", e.target);
      removeElement(e.target);
    } else if (e.target.tagName === "LI") {
      console.log("li선택: ", e.target);
      selectElement(e.target);
    }
  });
}

/**
 * 생성: 새로운 span 요소를 생성하고, li 태그에 추가합니다.
 * @param {HTMLElement} li - 부모 요소인 li
 */
function addCloseEvent(li) {
  const span = document.createElement("span");
  span.innerHTML = "X";
  span.className = "close";
  // span.classList.remove("close");
  // span.setAttribute("class", "close");
  // span.addEventListener("click", removeElement);
  li.appendChild(span);
}

/**
 * 추가: 새로운 li 요소를 생성하고, 삭제 버튼을 붙여 UL에 추가합니다.
 */
function newElement() {
  if (myInput.value.trim() === "") {
    alert("내용을 입력해주세요");
    return;
  }
  const li = document.createElement("li");
  li.textContent = myInput.value;
  // li.addEventListener("click", selectElement);
  addCloseEvent(li);
  myUL.appendChild(li);
  myInput.value = "";
}

/**
 * 삭제: 클릭된 요소의 부모(li)를 삭제합니다.
 * @param {HTMLElement} target - 클릭된 'X' span 요소
 */
function removeElement(target) {
  // e.stopPropagation(); // 클릭 이벤트가 li로 전파되는 것을 막음
  target.parentNode.remove();
}

/**
 * 선택: 클릭된 요소의 class를 토글화합니다.
 * @param {HTMLElement} target - 클릭된 li 요소
 */
function selectElement(target) {
  // console.log(e);
  target.classList.toggle("checked");
}

init();
