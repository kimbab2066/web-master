function Calculate() {
  let a, b, oper;
  a = document.querySelector("#user_value1").value;
  b = document.querySelector("#user_value2").value;
  oper = document.querySelector("#select1").value;
  [a, b] = [Number(a), Number(b)];
  let res;
  switch (oper) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
  }
  document.querySelector("#result").value = res;
}
