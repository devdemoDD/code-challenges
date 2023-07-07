function testDivisors(low, high) {
  for (let i = low; i <= high; i++) {
    console.log(i);
    if (i % 3 === 0) console.log('div3');
  }
}

testDivisors(2, 10);
