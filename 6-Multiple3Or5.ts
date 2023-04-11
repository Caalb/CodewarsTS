const solution = (num: number) => {
  if(num <= 2) {
    return 0;
  }

  let multiples = []

  for(let i = 0; i < num; i++) {
      if(i % 3 === 0 || i % 5 ===0) {
        multiples.push(i);
      }
    }

  const result = multiples.reduce((a,b) => a + b, 0)

  return result;
}

console.log(solution(10))