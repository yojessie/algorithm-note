// 연습문제 - 둘만의 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/155652

// 2023-08-10

// 너무나 헷갈려서 오래 걸린 문제
function solution(s, skip, index) {
  skip = [...skip].map((v) => v.charCodeAt()).sort((a, b) => a - b);
  const answer = [...s].map((char) => {
    let num = char.charCodeAt();
    for (let i = 0; i < index; i++) {
      num++;
      while (skip.includes(num)) num++;
      if (num > 122) {
        const over = num - 122;
        num = 96;
        for (let j = 0; j < over; j++) {
          num++;
          while (skip.includes(num)) num++;
        }
      }
    }
    return String.fromCharCode(num);
  });
  return answer.join("");
}
solution();

// 스킵해야할 문자들은 미리 아스키코드로 바꿔 정렬해놓는다
// 문자에서 글자 하나씩 처리를 시작한다
// 해당 글자의 아스키코드를 변수에 할당하고
// 이동해야할 인덱스 만큼 한칸씩 이동하며 그 사이에 스킵해야할 문자들이 있는지 확인한다
// 스킵할 문자들 확인 후 숫자가 122를 넘어가는지 확인한다
// 오버된 수를 변수에 저장해두고, 숫자는 a직전의 자리로 돌려놓는다
// 오버된 만큼 하나씩 더하면서 스킵해야할 숫자가 잇는지 확인한다
// 최종적으로 정리된 숫자를 다시 문자로 변환한다.
