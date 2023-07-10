// reduce 구현
// 참고 : https://gusrb3164.github.io/web/2021/05/30/js-reduce/
function myReduce(cb, initialValue) {
  let i = 0;
  let accumulate;

  if (initialValue) {
    accumulate = initialValue;
  } else {
    accumulate = initialValue = this[0];
    i++;
  }

  for (; i < this.length; i++) {
    accumulate = cb(accumulate, this[i], i, this);
  }

  return accumulate;
}

Array.prototype.myReduce = myReduce;

const result1 = [1, 2, 3, 4].myReduce((acc, cur) => acc + cur, 0);
console.log(result1);
const result2 = [1, 2, 3, 4, 1, 2, 6, 7].myReduce((acc, cur) => ({ ...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1 }), {});
console.log(result2);
