let members = [];

/**
 * xhttp connection
 */
function init() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("get", "../fifth/data.json");
  xhttp.send();
  xhttp.onload = () => {
    members = JSON.parse(xhttp.responseText);
    // console.log(members);
  };
}

setTimeout(() => {
  timeHandler(1);
}, 1000);

setTimeout(() => {
  timeHandler(2);
}, 2000);

setTimeout(() => {
  timeHandler(3);
}, 500);

function timeHandler(n) {
  console.log(`${n} function`);
}
