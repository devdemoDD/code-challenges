// @description a로 회전해서 b를 만들수 있는지 여부 확인
// @example ABCD, BCDA, CDAB, DABC
function checkRotatable(a, b) {
  const loopCount = a.length;
  let rotated = a;

  for (let i = 0; i < loopCount; i++) {
    const splited = rotated.split('');
    for (let i = 0; i < rotated.length - 1; i++) {
      [splited[i], splited[i + 1]] = [splited[i + 1], splited[i]];
    }
    rotated = splited.join('');

    if (rotated === b) return true;
  }

  return false;
}

console.log(checkRotatable('ABCD', 'BCDA')); // true
console.log(solution('ABCD', 'ACBD')); // false

function solution(a, b) {
  return a.length === b.length && (a + a).includes(b);
}

console.log(solution('ABCD', 'BCDA')); // true
console.log(solution('ABCD', 'ACBD')); // false
