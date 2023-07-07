function luckySevens(array) {
  let sum = 0,
    count = 0;
  const result = []; // 체크용

  for (let i = 0; i < array.length; i++) {
    if (sum === 7 && count === 3) return true;
    if (sum > 7) {
      sum -= array[i - 3];
      result.shift();
      count--;
    }
    result.push(array[i]);
    sum += array[i];
    count++;
    console.log(sum, count, result);
  }

  return false;
}

console.log(luckySevens([2, 1, 5, 1, 0]));
