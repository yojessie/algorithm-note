// 연습문제 - 숫자짝궁
// https://school.programmers.co.kr/learn/courses/30/lessons/131128

// 2023-08-09
function solution(X, Y) {
  const result = [];
  for (const i of X) {
    const temp = Y.replace(i, "");
    if (Y !== temp) {
      Y = temp;
      result.push(i);
    }
  }

  let answer = result.sort((a, b) => (b > a ? 1 : -1)).join("");
  return answer === "" ? (answer = "-1") : answer[0] !== "0" ? answer : "0";
}
solution();

// 시간초과 뜨는 부분때문에 어디서 복잡도를 늘리는지 찾으려고 이런저런 시도들을 했다.
// 문자타입 그대로 정렬, replace, match로도 안된다.
// 다른 답을 봐도 전 풀이에서 뭐가 문제였는지 잘 모르겠다.

function solution2(X, Y) {
  const checkX = new Array(10).fill(0);
  const checkY = new Array(10).fill(0);
  for (const i of X) checkX[i]++;
  for (const i of Y) checkY[i]++;

  const result = [];
  for (let i = 9; i >= 0; i--) {
    if (checkX[i] === 0 || checkY[i] === 0) continue;
    else result.push(String(i).repeat(Math.min(checkX[i], checkY[i])));
  }
  if (result.length === 0) result.push(-1);

  const answer = result.join("");
  return answer[0] === "0" ? "0" : answer;
}
solution2();

// 다른사람 풀이를 보고 오브젝트 만드는 방식으로 다시 해봤는데
// 이 방법이 더 좋은 것 같다
function solution3(X, Y) {
  let result = "";
  const check = {};

  for (const x of X) {
    check[x] = (check[x] || 0) + 1;
  }
  for (const y of Y) {
    if (!check[y]) continue;
    result += y;
    check[y]--;
  }
  if (result === "") return "-1";
  if (+result === 0) return "0";
  return [...result].sort((a, b) => b - a).join("");
}
solution3();
