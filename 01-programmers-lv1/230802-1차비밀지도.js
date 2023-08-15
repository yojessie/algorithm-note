// 2018 KAKAO BLIND RECRUITMENT - [1차] 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681

// 2023-08-02
function solution(n, arr1, arr2) {
  const answer = [];
  arr1 = arr1.map((x) => x.toString(2).padStart(n, 0));
  arr2 = arr2.map((x) => x.toString(2).padStart(n, 0));

  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "0" && arr2[i][j] === "0") temp += " ";
      else temp += "#";
    }
    answer.push(temp);
  }
  return answer;
}
solution();
