// 연습문제 - 직사각형 별찍기
// https://school.programmers.co.kr/learn/courses/30/lessons/12969

// 2023-08-02
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const [n, m] = data.split(" ").map(Number);
  const row = `${"*".repeat(n)}\n`;
  const answer = row.repeat(m);
  console.log(answer);
});
