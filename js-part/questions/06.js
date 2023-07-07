// with reduce
function oddballSum1(array) {
  return array.reduce((total, num) => (num % 2 === 0 ? total : total + num));
}
console.log(oddballSum1([1, 2, 3, 4, 5]));

function oddballSum2(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) sum += array[i];
  }
  return sum;
}
console.log(oddballSum2([1, 2, 3, 4, 5]));
