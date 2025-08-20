// 아래처럼 별을 찍어주세요.
// 예시)
// *****
// *****
// *****
// *****
// *****
let star = '*';
let makedStar = '';

// let h = 0;
// for(let s = starts; s < maxs; s++) {
//     for(h; h < maxstar; h++) {
//         makedStar += star
//       }
//       console.log(makedStar);
//     }
    
for(let i = 0; i < 5; i++) {
  let makedStar = '';
  for(let z = 0; z < 5; z++) {
    makedStar += star;
  }
  console.log(`${makedStar}`);
}

for(let i = 0; i < 5; i++) {
  makedStar += star;
  console.log(`${makedStar}`);
}

let empty = ' ';
let line = 5;
for(let i = 0; i < line; i++) {
  let makedStar = '';
  for(let z = i+1; z < line; z++) {
    makedStar += empty
  }
  for(let x = 4-i; x < line; x++){
  makedStar += star
  }
console.log(`${makedStar}`);
}

makedStar = '';
for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace = '';

  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log( + makedStar);
}
