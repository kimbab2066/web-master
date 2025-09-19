console.log("스크립트 파일이 시작되었습니다."); // 체크포인트 1

const API_URL = "http://localhost:3000";
const field = ["id", "title", "author", "views"];
const comment = ["id", "text", "postId"];

const classMap = {
  id: "item-meta-id", // ID는 메타 정보
  title: "item-title", // title은 제목 역할
  author: "item-meta", // 작성자도 메타 정보
  views: "item-meta", // 조회수도 메타 정보
};

//폼
const formTag = document.querySelector(".add-item-form"); // document.forms[0]와 같음
formTag.addEventListener("submit", addBtn);

/**
 * 게시글 목록
 */
fetch(`${API_URL}/posts`)
  .then((res) => {
    console.log("loading...");
    return res.json();
  })
  .then((res) => {
    console.log("post data...");
    res.forEach((x) => {
      const container = document.querySelector("#data-container");
      const div = makePost(x);
      container.appendChild(div);
    });
    console.log("post list...");
  })
  .catch((error) => error);
/**
 * 댓글 목록
 */
fetch(`${API_URL}/comments`)
  .then((res) => {
    console.log("loading...");
    return res.json();
  })
  .then((res) => {
    console.log("comment data...");
    console.log(res);
    const items = document.querySelectorAll("#data-container .data-item");
    // console.log("items", items[0].children[0].innerHTML);
    items.forEach((item) => {
      const itemId = item.children[0].innerHTML;
      // console.log('리스트의 id: ', itemId);
      const parent = document.querySelector(`.${item.children[0].className}`);
      console.log(parent);

      parent.appendChild(makeComments(itemId));
    });

    // const comment = makeComments(row, row.id);
    // div.appendChild(comment);
  });
/**
 * 게시글 삭제
 */

/**
 * 게시글 목록
 * @param {*} row
 * @returns
 */
function makePost(row) {
  const div = document.createElement("div");
  div.setAttribute("class", "data-item");
  for (val of field) {
    const span = document.createElement("span");
    const className = classMap[val] || "item-default";
    span.setAttribute("class", className);
    span.innerHTML = row[val];
    div.appendChild(span);
  }
  // const comment = makeComments(row, row.id);
  // div.appendChild(comment);
  return div;
}

/**
 * 게시글 삭제 기능
 */
function deletePost(e) {
  //logic
  //1. 게시글 타겟 가져오기

}

/**
 * 댓글 목록 기능
 * @param {*} row
 * @returns
 */
function makeComments(row) {
  const div = document.createElement("div");
  div.setAttribute("class", "comment-container");
  console.log(row);
  
  const result = row.filter((x) => x.postId == row.id);
  result.forEach((arr) => {
    const span = document.createElement("span");
    const className = "item-comment";
    span.setAttribute("class", className);
    span.textContent = arr.text;
    div.appendChild(span);
    console.log(arr);
  });
  // console.log(result, div, row.id);
  return div;
}

/**
 * 게시글 추가
 */
function addBtn(e) {
  console.log("addBtn 함수 실행...");
  e.preventDefault();
  const [title, author] = document.querySelectorAll(".add-item-form input");
  if (title.value == "" || author.value == "") {
    alert("제목과 작성자를 입력하세요.");
    return;
  }
  //logic
  fetch("http://127.0.0.1:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title.value,
      author: author.value,
      views: 100,
    }),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
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
