// 2018 KAKAO BLIND RECRUITMENT - [1차] 뉴스 클러스터링
// https://school.programmers.co.kr/learn/courses/30/lessons/17677

// 2023-09-19 - 리팩토링
export function solution(str1: string, str2: string) {
  const getGrams = (str: string) => {
    const strArr = [];
    for (let i = 1; i < str.length; i++) {
      const twoChar = str[i - 1] + str[i];
      if (twoChar.replace(/[^a-zA-Z]/g, "") === twoChar) {
        strArr.push(twoChar.toLowerCase());
      }
    }
    if (strArr.length === 0) strArr.push("empty");
    return strArr;
  };

  const multiSetA = getGrams(str1);
  const multiSetB = getGrams(str2);
  const unionSet = new Set([...multiSetA, ...multiSetB]);

  let union = 0;
  let inter = 0;

  for (const str of unionSet) {
    const occurenceInA = multiSetA.filter((s) => s === str).length;
    const occurenceInB = multiSetB.filter((s) => s === str).length;

    union += Math.max(occurenceInA, occurenceInB);
    inter += Math.min(occurenceInA, occurenceInB);
  }

  return Math.floor((inter / union) * 65536);
}
