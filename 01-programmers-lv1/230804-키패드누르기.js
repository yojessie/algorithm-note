// 2020 카카오 인턴십 - 키패드 누르기
// https://school.programmers.co.kr/learn/courses/30/lessons/67256

// 2023-08-04
// 코드 정리하는데 한참 걸렸다.. 두세시간쯤 걸린거같은데..
// 전에는 이걸 어떻게 푼거지...
function solution(numbers, hand) {
  const numArr = [
    [3, 6, 9, "#"],
    [1, 4, 7, "*"],
    [2, 5, 8, 0],
  ];
  let nowR = "#";
  let nowL = "*";

  function dis(from, to) {
    let fromLo = [];
    const toLo = [2, numArr[2].indexOf(to)];
    if (from === 0) fromLo = [2, numArr[2].indexOf(from)];
    else if (from % 3 === 0 || from === "#")
      fromLo = [0, numArr[0].indexOf(from)];
    else if (from % 3 === 1 || from === "*")
      fromLo = [1, numArr[1].indexOf(from)];
    else fromLo = [2, numArr[2].indexOf(from)];

    const distance = Math.abs(fromLo[1] - toLo[1]);
    return fromLo[0] === toLo[0] ? distance : distance + 1;
  }

  let answer = "";
  for (const i of numbers) {
    if (i % 3 === 0 && i !== 0) {
      answer += "R";
      nowR = i;
    } else if (i % 3 === 1) {
      answer += "L";
      nowL = i;
    } else if (dis(nowR, i) < dis(nowL, i)) {
      answer += "R";
      nowR = i;
    } else if (dis(nowR, i) > dis(nowL, i)) {
      answer += "L";
      nowL = i;
    } else if (hand === "right") {
      answer += "R";
      nowR = i;
    } else {
      answer += "L";
      nowL = i;
    }
  }
  return answer;
}
solution();
