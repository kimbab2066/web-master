const xhttp = new XMLHttpRequest();
xhttp.open("get", "data.json");

xhttp.send();
xhttp.onload = function () {
  const data = JSON.parse(xhttp.responseText);
  // console.log(data);
  const list = document.querySelector("#list");
  let field = ["id", "first_name", "last_name", "gender", "email"];
  data.forEach((row, idx) => {
    const tr = document.createElement("tr");
    for (val of field) {
      const td = document.createElement("td");
      td.innerHTML = row[val];
      tr.appendChild(td);
    }
    list.appendChild(tr);
  });
};
