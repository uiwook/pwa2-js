// setTimeout(cb, ms) : 일정 시간이 지난후 작업 실행하는 함수 return값 timeoutID : number
// const timeoutNum1 = setTimeout(() => {
//   console.log('2초');
// }, 2000);
// setTimeout(() => {
//   console.log('1초');
// }, 1000);
// setTimeout(() => {
//   console.log('3초');
// }, 3000);
// console.log('0초');

// clearTimeout(timeoutID) : setTimeout을 취소
// clearTimeout(timeoutNum1);

// setInterval : 일정 시간마다 반복해서 실행하는 함수
const intervalId1 = setInterval(() => {
  console.log('인터벌 3초');
}, 3000);

// setInterval() 제거
clearInterval(intervalId1);