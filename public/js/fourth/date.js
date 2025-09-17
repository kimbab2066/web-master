const date = new Date();

// console.log(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
const today = new Date();
today.setFullYear(2025);
// today.setMonth(11);
// console.log(`월: ${today.getMonth() + 1} 일: ${today.getDate()} 요일: ${today.getDay()}`);

//날짜 입력하면 '2025-11-12' => 요일 정보를 반환해주는 함수
function translateDay(s) {
  const arr = s.split(/[-:\/]/);
  const year = Number(arr[0]);
  const mon = Number(arr[1]);
  const day = Number(arr[2]);
  const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ["화", "수", "목", "금", "토", "일", "월"];
  let result = day;
  for (let i = 1; i < mon; i++) {
    result += months[i];
  }
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    if (mon > 2) result += 1;
  }
  console.log(mon, day, result);
  console.log(week[result % 7]);
}
translateDay("2025-09-11");
