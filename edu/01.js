// 변수 : 변하는 데이터를 저장하기 위한 공간
var var1 = '제육';
let let1 = '행버거';
var var2;
var2 = 0;

//상수 : 최초에 대입한 값이 절대 변하지 않는 공간
// 다른값을 넣으려고 하면 에러가 발생
const const1 = '뚝불';

// var를 지양해야 하는 이유
// 1. var는 중복 선언이 가능하다.
var name = '홍길동';
var name = '갑돌이';

// let name2 = '둘리';
// let name2 = '도우너';
// let은 빨간줄이 생겨서 실수인 부분을 나타내준다.
// 2. 작성한 코드상, 선언보다 사용을 먼저 할경우,
//오류가 발생하지 않고, 접근 가능한 현상
// console.log(age);
let age = 20;

//3. var는 기본적으로 함수 레벨 스코프
// 스코프의 종류 :전역 스코프 , 지역 스코프, 블록레벨 스코프
var globalVar = 'globalVar';
let globalLet = 'globalLet';
const globalConst = 'globalConst';

function test() {
  var localVar = 'localVar';
  let localLet = 'localLet';
  const localConst = 'localConst';
  console.log(globalVar);
  console.log(globalLet);
  console.log(globalConst);

  console.log(localVar);
  console.log(localLet);
  console.log(localConst);
}

test();

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// console.log(localVar);
// console.log(localLet);
// console.log(localConst);

if(true) {
  var blockVar = 'blockvar'; // 기본 함수레벨 스코프
  let blockLet = 'blockLet'; // 기본 블럭레벨 스코프
  const blockConst = 'blockConst'; // 기본 블럭레벨 스코프
}

// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);