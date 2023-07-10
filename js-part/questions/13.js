function solution(string) {
  const splited = string.split(' ');
  return splited.reduce((acc, cur) => acc + cur.split('').reverse().join('') + ' ', '');
}

console.log(solution('Welcome to this Javascript Guide!')); // emocleW ot siht tpircsavaJ !ediuG
