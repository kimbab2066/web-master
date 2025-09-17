let sum = (a, b) => {
  // console.log(this);
  return a + b;
};

// console.log(sum(1, 2));

document.querySelector("table").addEventListener("click", function (e) {
  console.log("e = ", e.target);
  console.log(this);
});

const obj = {
  name: "park",
  show: function () {
    console.log(this);
    return `이름: ${this.name}`;
  },
};

// console.log(obj);
console.log(obj.show());

// obj.show();
