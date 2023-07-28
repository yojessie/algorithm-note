// 2023-07-28
// 완전탐색 > 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842


function solution(brown, yellow) {
    let sum = brown + yellow
    // 전체 칸의 갯수를 구한다
    let arr = []
    for (let i = 3; i <= Math.sqrt(sum); i++) {
        if (sum % i === 0) {
            arr.push([sum / i, i])
        }
    }
    // 전체 칸의 갯수를 만들어낼 수 있는 가로세로 경우의 수를 찾아낸다.
    // sum의 약수를 찾아 arr에 이중배열로 저장했고
    // 문제의 조건에 brown이 겉에 한줄 빙 둘러싸는 모양이 되어야하므로
    // 세로가 1, 2인 경우는 존재할 수 없어 반복문은 3부터 시작했다.

    for (let [n, m] of arr) {
        let outline = (n * 2) + ((m - 2) * 2)
        if (outline === brown) return [n, m]
    }
    // 앞서 구한 가로세로 경우의 수를 토대로 겉을 한줄 둘러쌀 때 만들어지는 임시값을 구한다
    // 임시값이 brown과 같으면 해당 가로세로 배열을 반환한다.
}


// 한참전에 감조차 안와서 포기했던 문제인데
// 이번에는 나름대로 계획한 것을 코드로 정리해서 풀 수 있었다.

// 역시 다른사람풀이에는 더 심플한 답들이 많다.

