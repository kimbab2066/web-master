fetch("http://localhost:3000/posts")
  .then(function (res) {
    console.log("ok", res);
    return res.json();
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log("not", err);
  });
