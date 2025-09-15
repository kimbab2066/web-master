//2개의 값을 입력받도록 화면 구성
//계산기 구현(+,-,*,/)
function cal() {
  let oper = document.getElementById("oper").value;

  let [a, b, result] = [0, 0, 0];
  [a, b] = document.querySelectorAll("input");
  a = Number(a.value);
  b = Number(b.value);
  oper = Number(oper);
  if (oper == 1) {
    result = plus(a, b);
  } else if (oper == 2) {
    result = minus(a, b);
  } else if (oper == 3) {
    result = multiply(a, b);
  } else if (oper == 4) {
    result = divide(a, b);
  }
  document.getElementById("result").value = result;
  // console.log(result);
}

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
