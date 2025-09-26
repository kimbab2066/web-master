const url = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=C1gXTmSGsP5zbgQz5gDxGojdxNYDpEOVkGjch8HQls%2FrDzp0ChEnUDumUY6ajc%2BvqlfQNXYWGSPB2LsxtJPrbw%3D%3D`;

let total = []; // 전체 센터목록

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    total = res.data;
    showPageList(3);
  })
  .catch((err) => console.log(err));

//건수에 따른 페이징목록 =>1,2,...28(현재 페이지 기준 +-5)
function makePagingList() {
  const paging = {
    currentPage: 1,
    startPage: 1,
    endPage: 10,
    prev: false,
    next: false,
    initPage(page = 1, totalCnt = 284) {
      const realEnd = Math.ceil(totalCnt / 10);
      this.currentPage = page;
      this.endPage = Math.ceil(page / 10) * 10;
      this.startPage = this.endPage - 9;
      this.prev = this.startPage == 1 ? false : true;
      this.next = this.endPage > realEnd ? false : true;
    },
  };
  paging.initPage(7);
  // console.log(paging);
  //ul
  const target = document.querySelector("ul.pagination");
  target.innerHTML = "";
  //prv
  const li = document.createElement("li");
  li.className = "page-item";
  if (paging.prev == false) li.classList.add("disabled");
  const a = document.createElement("a");
  a.innerText = "Previous";
  a.className = "page-link";
  li.appendChild(a);
  target.appendChild(li);

  //now
  for (let s = paging.startPage; s <= paging.endPage; s++) {
    const li = document.createElement("li");
    li.className = "page-item";
    const a = document.createElement("a");
    a.innerText = s;
    a.className = "page-link";
    a.href = "#";
    li.appendChild(a);
    target.appendChild(li);
  }
  //next
  const li2 = document.createElement("li");
  li2.className = "page-item";
  if (paging.next == false) li2.classList.add("disabled");
  const a2 = document.createElement("a");
  a2.innerText = "Next";
  a2.className = "page-link";
  a2.href = "#";
  li2.appendChild(a2);
  target.appendChild(li2);
}
makePagingList();
//a태그
function pageLinkEvent() {
  document.querySelectorAll("a.page-link").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const page = item.innerText;
      showPageList(page);
    });
  });
}

/**
 * 리스트
 * @param {HTMLElement} page
 */
function showPageList(page = 1) {
  //초기화
  document.querySelector("#centerList").innerHTML = "";
  const st = (page - 1) * 10;
  const ed = page * 10;

  total
    .filter((item) => st < item.id && item.id <= ed)
    .forEach((element) => {
      const tr = makeRow(element);
      document.querySelector("#centerList").appendChild(tr);
    });
}

/**
 * 상세 조회
 * @param {HTMLElement} element
 * @returns
 */
function makeRow(element) {
  const field = ["id", "centerName", "address", "sido"];
  const tr = document.createElement("tr");
  for (val of field) {
    const td = document.createElement("td");
    td.innerText = element[val];

    tr.appendChild(td);
  }
  return tr;
}

pageLinkEvent();
