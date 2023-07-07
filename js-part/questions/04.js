// with reduce
function sumArray1(array) {
  return array.reduce(
    (acc, arr) => acc + arr.reduce((acc, num) => acc + num, 0),
    0
  );
}

console.log(sumArray1([[3, 2], [1], [4, 12]])); // 22

//without reduce
function sumArray2(array) {
  array = array.flat(1);
  let total = 0;
  for (const num of array) {
    total += num;
  }
  return total;
}

console.log(sumArray2([[3, 2], [1], [4, 12]])); // 22
