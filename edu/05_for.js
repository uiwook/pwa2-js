// For 문
// for(let i = 0; i < 5; i++) {
//   if(i >= 3) {
//     break;
//   }
//   console.log(i);
// }

for(let i = 0; i < 5; i++) {
  if(i === 3) {
    continue;
  }
  console.log(i);
}

//다중루프
for(let i = 0; i < 3; i++) {
  console.log(`바깥쪽 루프 : ${i}번째`);
  for(let z = 0; z < 3; z++) {
    console.log(`안쪽 루프 : ${z}번째`);
  }
}

// 구구단 2단 출력
// 예시)
// 2 X 1 = 2
// 2 X 2 = 4
// ...
// 2 X 9 = 18
// let dan = 2;
// for(let i = 1; i < 10; i++) {
//   console.log(`${dan} X ${i} = ${dan * i}`);
// }
let startDan = 2;
let starti = 1;
let maxDan = 9;

for(let xdan = startDan; xdan <= maxDan; xdan++) {
  console.log(`** ${xdan}단 **`)
  for(let i = starti; i <= maxDan; i++) {
    console.log(`${xdan} X ${i} = ${xdan * i}`);
  }
}