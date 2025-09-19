const xhttp = new XMLHttpRequest();
xhttp.open("get", "../fifth/data.json");
xhttp.send();

xhttp.onload = function () {
  const data = JSON.parse(xhttp.responseText);

  //filter, map을 사용해서 여자 사원의 사원, 이름을 합쳐서 리터럴 형태로 출력하시오.
  //ex: no, firstName lastName eMail 형태
  const formattedFemaleUsers = data
    .filter((x) => x.gender == "Female")
    .map(
      ({ id: user, first_name: first, last_name: last, email }) =>
        `${user} ${first} ${last} ${email}`
    );
  // console.log(formattedFemaleUsers);
  for (let i = 0; i < 10; i++) console.log(formattedFemaleUsers[i]);
};
