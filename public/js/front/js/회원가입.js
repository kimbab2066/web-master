const [submitBtn, resetBtn] = document.querySelectorAll("#buttons button");
submitBtn.addEventListener("click", init);
resetBtn.addEventListener("click", reset);

function init(e) {
  // e.preventDefault();
  const user_id = document.querySelector("#user-id").value;
  const user_pw1 = document.querySelector("#user-pw1").value;
  const user_pw2 = document.querySelector("#user-pw2").value;
  if (idChk(user_id) == false) return;
  if (pwChk(user_pw1) == false) return;
  if (pwMatch(user_pw1, user_pw2) == false) return;
  alert("회원가입 성공");
}

function idChk(user_id) {
  console.log(`id값: ${user_id}`);
  if (user_id.length < 4 || user_id.length > 15) {
    alert("4글자 이상 15자리 이하 입력해주세요.");
    // document.querySelector("#user-id").value = "";
    document.querySelector("#user-id").focus();
    return false;
  }
  return true;
}
function pwChk(user_pw1) {
  console.log(`pw값: ${user_pw1}`);
  if (user_pw1.length < 8) {
    alert("8자리 이상 입력해주세요.");
    console.log("값:", user_pw1);
    document.querySelector("#user-pw1").value = "";
    document.querySelector("#user-pw1").focus();
    return false;
  }
  return true;
}
function pwMatch(user_pw1, user_pw2) {
  console.log(`pw2값: ${user_pw2}`);
  if (user_pw1 != user_pw2) {
    alert("비밀번호가 일치하지 않습니다.");
    document.querySelector("#user-pw2").value = "";
    document.querySelector("#user-pw2").focus();
    return false;
  }
  return true;
}
function reset() {
  document.querySelector("#user-id").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#user-pw1").value = "";
  document.querySelector("#user-pw2").value = "";
}
