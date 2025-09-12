function Cal() {
  let x, y, oper;
  x = document.querySelector("#user_value1").value;
  y = document.querySelector("#user_value2").value;
  oper = document.querySelector("#oper").value;
  [x, y] = [Number(x), Number(y)];
  let res;
  if (oper == "+") {
    res = x + y;
  } else if (oper == "-") {
    res = x - y;
  } else if (oper == "*") {
    res = x * y;
  } else if (oper == "/") {
    res = x / y;
  }
  document.querySelector("#result").value = res;
}
