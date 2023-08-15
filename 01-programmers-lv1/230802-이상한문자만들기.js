// 연습문제 - 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

// 2023-08-02
// 전에는 문자열을 모두 대문자, 소문자로 만들어두고
// 인덱스에따라 필요한 형태를 추가하는 방식으로 문제를 풀었고
// 이번에는 인덱스에따라 문자를 바로 바꿔서 추가하는 방식으로 풀었다.
// 별도 answer를 두지않고 바로 문자열을 변형하고싶었는데 잘 안됐다.
function solution(s) {
  const answer = [];
  const arr = s.split(" ");

  for (const i of arr) {
    const temp = [];
    for (let j = 0; j < i.length; j++) {
      if (j % 2 === 0) temp.push(i[j].toUpperCase());
      else temp.push(i[j].toLowerCase());
    }
    answer.push(temp.join(""));
  }
  return answer.join(" ");
}
solution();

// 풀고나서 다른사람 풀이를 보니 map을 활용하면 됐을거같아서 다시 해봄
// map으로 문자를 변환한 부분을 return 해줘야하는구나.
// 걸리는 시간은 위 코드보다 더 짧았다.
function solution2(s) {
  return s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((str, idx) => {
          return idx % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}
solution2();
