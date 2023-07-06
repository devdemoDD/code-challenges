// Explain how Bubble Sort works

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // 부등호에 따라서 차순 변경
      // > : 앞에 숫자가 크면 스왑 → 오름차순
      // < : 뒤에 숫자가 크면 스왑 → 내림차순
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  console.log(arr);
}

solution([4, 5, 1, 7, 9, 10, 3, 2, 6, 8]);
