function solution(s) {
  const tupleSet = JSON.parse(s.replaceAll("{", "[").replaceAll("}", "]"));
  tupleSet.sort((a, b) => a.length - b.length);
  const answer = [];
  for (const set of tupleSet) {
    answer.push(...set);
  }
  return [...new Set(answer)];
}
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
