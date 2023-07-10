function plusOne(array) {
  return array.reduce((acc, cur) => acc + cur + 1, 0);
}

console.log(plusOne([1, 2, 3, 4, 5]));
