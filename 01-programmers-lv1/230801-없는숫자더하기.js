// 월간 코드 챌린지 시즌3 - 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

// 2022-09-04
function solution(numbers) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let rest = arr.filter((ele) => !numbers.includes(ele));
    return rest.reduce((acc, cur) => acc + cur);
}

  
// 2023-08-01
function solution(numbers) {
    let answer = 0
    for (let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i
    }
    return answer
}