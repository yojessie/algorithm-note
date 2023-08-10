// 연습문제 - 옹알이 2
// https://school.programmers.co.kr/learn/courses/30/lessons/133499

// 2023-08-09
function solution(babbling) {
  let count = 0;
  for (let i of babbling) {
    i = i.replace(/ayaaya|yeye|woowoo|mama/g, " ");
    i = i.replace(/aya|ye|woo|ma/g, "");
    if (i === "") count++;
  }
  return count;
}

// 단어가 두번 연속 반복된 부분을 잡아내지 못해서 결국 정규식을 활용했다.
// 그런데 저렇게 정규식을 쓰면 하드코딩한 것 같아서 안좋은 코드인 것 같다.

function solution(babbling) {
  let word = ["aya", "ye", "woo", "ma"];
  let count = 0;
  for (let i of babbling) {
    for (let j of word) {
      if (i.includes(j + j)) break;
      i = i.replaceAll(j, " ");
    }
    if (i.trim() === "") count++;
  }
  return count;
}

// if (i.includes(j + j)) break;
// 이 한줄이면 해결 되었을 것을...
