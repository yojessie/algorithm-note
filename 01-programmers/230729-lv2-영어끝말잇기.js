// 2023-07-29
// 영어 끝말 잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    let wordSet = new Set
    wordSet.add(words[0])    
    let answer = [0,0]
    
    for (let i = 1; i < words.length; i++) {
        let lastChar = words[i-1][words[i-1].length - 1]
        
        if (wordSet.has(words[i]) || lastChar !== words[i][0]) {
            let person = (i % n) + 1
            let turn = Math.ceil((i + 1) / n)
            answer = [person, turn]
            break
        } else {
            wordSet.add(words[i])
        }
    }
    return answer
}


// 은근 애 먹었던 문제인데
// 다른사람 답을 보니 reduce로 앞 뒤 단어를 비교하는 방법도 있었다.
// 로직 이해해서 내 식으로 바꿔보고싶었는데 시간이 너무 걸려서 일단 패쓰