sum = 0;

document.writeln('<table class = "table">');
document.writeln(
  `<thead>
  <tr>
  <th>단수</th>
  <th></th>
  <th>배수</th>
  <th></th>
  <th>결과</th>
  </thead>
  <tbody>`
);
for (let i = 1; i < 10; i++) {
  document.writeln(`<tr>
    <td>3</td>
    <td> * </td>
    <td>${i}</td>
    <td> = </td>
    <td>${3 * i}</td>
    </tr>`);
}
document.writeln("</tbody></table>");

const fruits = ["사과", "바나나", "포도"];
const lst = document.querySelectorAll("#test-list li");
for (let i = 0; i < 3; i++) {
  lst[i].textContent = fruits[i];
}
// lst.forEach((li, index) => {
//   li.textContent = fruits[index];
// });
