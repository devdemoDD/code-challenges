// 0, 1, 1, 2, 3, 5, 8
// not O(n)
function solution(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  return solution(n - 1) + solution(n - 2);
}

console.log(solution(6));

// O(n)
function solution1(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

console.log(solution(6));
console.log(solution(4));
