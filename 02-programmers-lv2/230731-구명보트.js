// 2023-07-31
// 그리디 알고리즘 - 구명보트
// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    people.sort((a, b) => b - a)
    
    let count = 0
    let left = 0
    let right = people.length - 1
    
    while (left < right) {        
        if (people[left] + people[right] > limit) left++
        else {
            left++
            right--
        }
        count++
    }
    if (left === right) count++
    
    return count
}

// 무거운 사람부터 정렬해놓고
// 배열 맨앞을 left, 맨 뒤를 right 인덱스로 정의
// 만약 left와 right의 합이 limit를 넘으면 left차례를 넘기고 left++한다.
// 만약 합이 limit를 넘지 않으면 left와 right 차례를 모두 넘기고
// left++, right-- 한다.
// 앞에 사람들이 모두 혼자 배를 타고 떠나는 무게였다면
// left값은 right값과 같아졌으므로 마지막 사람을 태우기 위해 count++ 한다
