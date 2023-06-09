// 우선순위큐 구현을 위한 힙 라이브러리 활용
// https://github.com/ndb796/priorityqueuejs

// npm install priorityqueuejs
const PriorityQueue = require("priorityqueuejs");

// Max Heap
let pq = new PriorityQueue(function(a, b) {
    return a.age - b.age
})
pq.enq({age: 20, name: 'Jessie'})
pq.enq({age: 30, name: 'Brian'})
pq.enq({age: 40, name: 'Tom'})
console.log(pq)
console.log(pq.size()) // 깊이반환
console.log(pq.deq()) // 루트노드 삭제
console.log(pq.peek()) // 루트노드 반환
console.log(pq.size()) // 깊이 반환