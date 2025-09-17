let today = new Date(2025, 11);
let [yyyy, mm, dd] = [Number(today.getFullYear()), Number(today.getMonth()), 1];
today.setFullYear(yyyy);
today.setMonth(mm - 1);
today.setDate(dd);

// console.log("test", today.getTime() / (1000 * 60 * 60 * 24));
// console.log(today.getDay());

let lastDate = new Date(yyyy, mm, 0).getDate();
let spaces = today.getDay();
let tr = document.createElement("tr");
/**
 * space
 */
for (let s = 0; s < spaces; s++) {
  let td = document.createElement("td");
  tr.appendChild(td);
}

holiday = [15, 24];
/**
 * calendar
 */
for (let d = 1; d <= lastDate; d++) {
  let td = document.createElement("td");
  td.innerHTML = d;
  tr.appendChild(td);
  let calendar = document.querySelector(".calendar table");
  calendar.appendChild(tr);
  if ((d + spaces) % 7 == 1) {
    td.setAttribute("class", "sunday");
  } else if ((d + spaces) % 7 == 0) {
    tr = document.createElement("tr");
    td.setAttribute("class", "saturday");
  }
}
