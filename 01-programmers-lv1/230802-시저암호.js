// 연습문제 - 시저암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 2022-08-23
function solution(s, n) {
  var answer = "";

  answer = s
    .split("")
    .map((item) => {
      let num = item.charCodeAt() + n;
      if (item == " ") {
        return " ";
      } else if (item == item.toUpperCase() && num > 90) {
        return num - 26;
      } else if (item == item.toLowerCase() && num > 122) {
        return num - 26;
      } else {
        return num;
      }
    })
    .map((item) => {
      return item == " " ? " " : String.fromCharCode(item);
    })
    .join("");

  return answer;
}

// 2023-08-02
function solution(s, n) {
  let answer = [];
  let arr = s.split("");

  for (let i of arr) {
    let num = i.charCodeAt();

    if (i === i.toUpperCase() && num + n > 90) num -= 26;
    else if (i === i.toLowerCase() && num + n > 122) num -= 26;

    if (i === " ") answer.push(num);
    else answer.push(num + n);
  }

  return answer.map((x) => String.fromCharCode(x)).join("");
}
