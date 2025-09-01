// Callback Hell
setTimeout(() => {
  console.log('A');
  setTimeout(() => {
    console.log('B');
    setTimeout(() => {
      console.log('C');
    }, 1000);
  }, 2000);
}, 3000);

// Promise 객체 : 콜백지옥을 개선할 수 있음
// 비동기 처리의 결과를 제공하겠다는 약속을 반환
// 단, 비동기 처리가 끝날 때 까지 결과를 기다리는 것은 아니다.
// resolve : 성공하면 반환 | reject : 실패하면 반환
function pro1(str, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(str === 'A' || str === 'B' || str === 'C') {
        console.log(str);
        resolve();
      } else {
        reject();
      }
    }, ms);
  });
}

pro1('A', 500)
.then(() => {
  console.log('Then');
}) // 작업이 성공했을 때, then() 실행
  .catch(() => {
    console.log('Catch');
  }) // 작업이 실패했을 때, catch() 실행
  .finally(() => {
    console.log('Finally');
  }); // 성공 실패 여부 상관없이 무조건 실행(마지막에 적어야 함)

pro1('A', 3000)
.then(() => {
  return pro1('B', 2000);
})
.then(() => {
  return pro1('C', 1000);
})
.catch();