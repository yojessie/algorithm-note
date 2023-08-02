// 연습문제 - 직사각형 별찍기
// https://school.programmers.co.kr/learn/courses/30/lessons/12969

// 2022-08-17
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const answer = "*".repeat(a);

  for (let i = 0; i < b; i++) {
    console.log(answer);
  }
});

// 2023-08-02
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  let [n, m] = data.split(" ").map(Number);
  let row = "*".repeat(n) + "\n";
  let answer = row.repeat(m);
  console.log(answer);
});
