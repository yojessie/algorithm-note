// 2018 KAKAO BLIND RECRUITMENT - [1차] 뉴스 클러스터링
// https://school.programmers.co.kr/learn/courses/30/lessons/17677

// 2023-09-18
export function solution(str1: string, str2: string) {
  const getMultiSet = (str: string) => {
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

  const multiSetA = getMultiSet(str1);
  const multiSetB = getMultiSet(str2);
  let unionSet = [...multiSetA, ...multiSetB];
  unionSet = [...new Set(unionSet)];

  let union = 0;
  let inter = 0;

  for (let str of unionSet) {
    const filteredA = multiSetA.filter((s) => s === str).length;
    const filteredB = multiSetB.filter((s) => s === str).length;

    union += Math.max(filteredA, filteredB);
    inter += Math.min(filteredA, filteredB);
  }

  return Math.floor((inter / union) * 65536);
}
