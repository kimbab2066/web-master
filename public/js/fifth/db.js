console.log("스크립트 파일이 시작되었습니다."); // 체크포인트 1

const field = ["id", "title", "author", "views"];
const comment = ["id", "text", "postId"];
const comments = [];
const classMap = {
  id: "item-meta-id", // ID는 메타 정보
  title: "item-title", // title은 제목 역할
  author: "item-meta", // 작성자도 메타 정보
  views: "item-meta", // 조회수도 메타 정보
};

const container = document.querySelector("#data-container");

//댓글
const xhttp2 = new XMLHttpRequest();
xhttp2.open("get", "http://127.0.0.1:3000/comments");
xhttp2.send();
xhttp2.onload = function () {
  const data = JSON.parse(xhttp2.responseText);
  data.forEach((x) => comments.push(x));
  console.log(comments);
};

//글
const xhttp = new XMLHttpRequest();
xhttp.open("get", "http://127.0.0.1:3000/posts");
xhttp.send();
xhttp.onload = function () {
  const data = JSON.parse(xhttp.responseText);
  data.forEach((row, idx) => {
    const div = makeRow(row);
    if (idx > 0) {
      div.classList.add("item-collapsed");
    }
    container.appendChild(div);
  });
};

const form = document.querySelector(".add-item-form");
form.addEventListener("submit", submitBtn);
console.log("Form 요소를 찾았습니다:", form);

if (form) {
  form.addEventListener("submit", submitBtn);
  console.log("이벤트 리스너가 성공적으로 등록되었습니다."); // 체크포인트 3
} else {
  console.error(
    "에러: '.add-item-form' 클래스를 가진 form 요소를 찾을 수 없습니다!"
  );
}

function submitBtn(e) {
  console.log("submitBtn 함수가 실행되었습니다!");
  e.preventDefault();
  addPost();
}

function addPost() {
  const [title, author] = document.querySelectorAll(".add-item-form input");
  console.log(title.value, author.value);
  const postRequest = new XMLHttpRequest();
  postRequest.open("post", "http://localhost:3000/posts");
  postRequest.setRequestHeader(
    "Content-Type",
    "application/json;charset=utf-8"
  );
  postRequest.onload = () => {
    const newPost = JSON.parse(postRequest.responseText);
    const container = document.querySelector("#data-container");
    const div = makeRow(newPost);
    container.appendChild(div);

    // Clear input fields
    title.value = "";
    author.value = "";
  };

  postRequest.send(
    JSON.stringify({
      title: title.value,
      author: author.value,
      views: 150,
    })
  );
}

//글목록
function makeRow(row) {
  const div = document.createElement("div");
  div.setAttribute("class", "data-item");
  for (val of field) {
    const span = document.createElement("span");
    const className = classMap[val] || "item-default";
    span.setAttribute("class", className);
    span.innerHTML = row[val];
    div.appendChild(span);
  }
  const comment = makeComments(row, row.id);
  div.appendChild(comment);
  return div;
}

//댓글목록
function makeComments(row) {
  const div = document.createElement("div");
  div.setAttribute("class", "comment-container");
  const result = comments.filter((x) => x.postId == row.id);
  result.forEach((arr) => {
    const span = document.createElement("span");
    const className = "item-comment";
    span.setAttribute("class", className);
    span.textContent = arr.text;
    div.appendChild(span);
  });
  // console.log(result, div, row.id);
  return div;
}

/**
 * accordion UI in JS
 */
container.addEventListener("click", (e) => {
  // 클릭된 요소가 data-item 또는 그 자식인지 확인합니다.
  // .closest()는 클릭된 지점부터 가장 가까운 .data-item을 찾아줍니다.
  const clickedItem = e.target.closest(".data-item");

  // .data-item이 아닌 다른 곳을 클릭했다면 아무 작업도 하지 않습니다.
  if (!clickedItem) {
    return;
  }

  // 모든 .data-item 요소들을 가져옵니다.
  const allItems = container.querySelectorAll(".data-item");

  // 모든 아이템을 순회하면서
  allItems.forEach((item) => {
    if (item === clickedItem) {
      // 내가 클릭한 아이템이면 '축소' 클래스를 제거해서 펼칩니다.
      item.classList.remove("item-collapsed");
    } else {
      // 내가 클릭한 아이템이 아니면 '축소' 클래스를 추가해서 접습니다.
      item.classList.add("item-collapsed");
    }
  });
});
