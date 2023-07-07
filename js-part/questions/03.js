/**
 * @param {number} n minute
 * @returns number  angle
 */
function simpleClockAngle(n) {
  return 360 * (n / 60);
}

console.log(simpleClockAngle(15));
console.log(simpleClockAngle(25));
console.log(simpleClockAngle(45));
