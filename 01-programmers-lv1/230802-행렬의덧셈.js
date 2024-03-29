// 연습문제 - 행렬의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12950

// 2023-08-02
function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const arr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr);
  }
  return answer;
}
solution();

// 이중반복문으로 해결한게 아쉬워서 map으로 다시 풀어봤는데
// map도 결국 모든 원소를 순회해야하니 별 차이는 없는 것 같다.
function solution2(arr1, arr2) {
  return arr1.map((x, idx1) => x.map((i, idx2) => (i += arr2[idx1][idx2])));
}
solution2();
