const field = ["id", "title", "author", "views"];

const classMap = {
  id: "item-meta-id", // ID는 메타 정보
  title: "item-title", // title은 제목 역할
  author: "item-meta", // 작성자도 메타 정보
  views: "item-meta", // 조회수도 메타 정보
};

const xhttp = new XMLHttpRequest();
xhttp.open("get", "../../../../server/db.json");

xhttp.send();
xhttp.onload = function () {
  const data = JSON.parse(xhttp.responseText).posts;
  // console.log(data);
  const container = document.querySelector("#data-container");

  data.forEach((row, idx) => {
    const div = makeRow(row);
    container.appendChild(div);
  });
};

document.querySelector(".add-item-form").addEventListener("submit", submitBtn);

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
  return div;
}

function submitBtn(e) {
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
