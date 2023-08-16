// 정렬 - 가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746

// 2023-08-15
function solution(numbers) {
  const result = numbers
    .sort((a, b) => {
      const nA = a.toString();
      const nB = b.toString();

      return nA + nB < nB + nA ? 1 : -1;
    })
    .join("");

  return result[0] === "0" ? "0" : result;
}
solution([3, 30, 34, 5, 9]);

// 처음에는 모든 조합을 구해서 가장 큰 수를 리턴하는 것으로 풀었지만
// 배열의 길이가 10만개, 각 원소가 1000 이상이므로 엄청 큰 수가 될 수 있어서 실패했다.
// 각 요소를 문자취급해서 내림차순 정렬하는데,
// 문자열로 바꾼 후에 a + b, b + a를 비교해서 더 큰수가 되는 문자를 앞에 오도록 정렬했다.
// 도저히 안풀리는 케이스가 있었는데, 질문게시판에서 요소로 0만 들어오는 경우도 있을 수 있다하셔서
// 마지막 반환시 문자열 맨 앞자리가 0인 경우를 걸렀더니 통과
// 뭐든지 좀 더 심플하게 생각해볼 필요가 있다.
