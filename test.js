var a = 1 // 1. 전역컨텍스트가 콜스택에 담긴다.
function outer() { // 3. 호출됨
	function inner() { // 5. 호출됨
		console.log(a)
		var a = 3
	}
	inner() // 4. inner 함수호출. inner실행컨텍스트를 콜스택에 담는다.
	console.log(a)
}
// outer() // 2. outer 함수호출. outer실행컨텍스트를 콜스택에 담는다.
// console.log(a)

// 1
{
  const y = 1;
  const z = 2;
  const x = 1 * 2
}

// 2
{
  const x = (() => {
    const y = 1;
    const z = 2;
    // 
    // 
    // 
    // 
    // 
    // 
    
    return y * z;
  })();
}
// immediately invoked function expression: IIFE

// 3
{
  let x;
  {
    const y = 1;
    const z = 2;

    x = y * z;
  }
}

