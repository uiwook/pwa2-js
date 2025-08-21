// 함수(Function)
// 입력을 받아 출력을 하는 일련의 과정을 정의한 것

// 함수 선언식
// 파라미터(parameter) : 외부로부터 입력받은 값을 저장하는 변수
// 선언 하지 않아도 됨;
function fnc1(a, b) {
  return a + b;
}
// 인수(argument) : 함수를 호출할 때 전달 해주는 값
let resultFnc1 = fnc1(1, 2)
console.log(resultFnc1);

console.log(fnc1(2,3));

// 함수 선언식 : 호이스팅에 영향을 받는다.
// 재할당이 가능하므로 함수명이 중복되지 않도록 조심해야 한다.
function fnc3(a,b) {
  return a + b;
}

console.log(fnc3(1,2));

// 함수 표현식 : 호이스팅에 영향을 받지 않는다.
// 재할당이 불가능하다.
const fnc4 = function(a, b) {
  return a + b;
}

fnc4(1,3);

// 화살표 함수 : 함수 표현식과 성격 비슷함
const fnc5 = (a,b) => a + b;

const fnc6 = function(a) {
  let test = a / 2;
  return test;
}
const fnc7 = a => {
  let test = a / 2;
  return test;
}

// 콜백(callback) 함수
// 다른 함수의 파라미터로 전달되어 특정 조건에 따라 호출되는 함수
function myChk(callback) {
  callback();
}
// 이름없는 '익명함수' 단발성으로 사용(이름이 없기 때문에 재호출 불가능)
myChk(() => console.log('콜백함수'));

function Hello(alam) {
  alam();
}
const test11 = function() {
 console.log('콜백함수');
}
Hello(test11);