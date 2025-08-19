// IF로 만들어주세요.
// 성적
// 범위 :
//    100   : A+
//    90이상 100미만 : A
//    80이상 90미만 : B
//    70이상 80미만 : C
//    60이상 70미만 : D
//    60미만: F
//출력 문구 : "당신의 점수는 XXX점 입니다. <등급>"

// let score = 1000;
// let grade;

// if(score === 100) {
//   grade = 'A+';
// } else if(90 <= score && score < 100) {
//   grade = 'A';
// } else if(80 <= score && score < 90) {
//   grade = 'B';
// } else if(70 <= score && score < 80) {
//   grade = 'C';
// } else if(60 <= score && score < 70) {
//   grade = 'D';
// } else if(100 < score) {
//   grade = '사기꾼';
// } else {
//   grade = 'F';
// }

// console.log('당신의 점수는 ' + score + '점 입니다. ' + grade);
// console.log('당신의 점수는 '.concat(score).concat('점 입니다. ').concat(grade))

let score = 100;
let grade = 'F';

if(score > 100 || score < 0) {
  console.log('잘못된 값입니다.');
} else {
  if(score === 100) {
    grade = 'A+';
  } else if(score >= 90) {
    grade = 'A';
  } else if(score >= 80) {
    grade = 'B';
  } else if(score >= 70) {
    grade = 'C';
  } else if(score >= 60) {
    grade = 'D';
  }
  console.log('당신의 점수는 ' + score + '점 입니다. <' + grade + '>');
  console.log(`당신의 점수는 ${score}점 입니다. <${grade}>`);
}