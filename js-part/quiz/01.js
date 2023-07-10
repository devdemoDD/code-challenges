const grade = [80.55, 90, -90, -45, 44.3, 100, 177];

/**
 * OUPUT : ['80점', '90점', '44점', '100점']
 *
 * 0~100
 * 소수점 제거
 * '점' 문자 추가
 * 출력
 */

grade
  .filter((score) => score >= 0 && score <= 100)
  .map((score) => `${parseInt(score, 10)}점`)
  .forEach((score) => console.log(score));
