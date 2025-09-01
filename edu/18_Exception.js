let divVal = 0;
try {
  // 내가 처리하고 싶은 로직을 작성하는 영역
  console.log('트라이 시작');
  if(divVal < 1) {
    //강제 예외 발생
    throw new Error('유저 입력값이 0임');
  }
  10 / divVal;
  console.log('트라이 끝');
} catch(err) {
  // try문에서 에러가 발생했을 때, 처리한 로직을 작성하는 영역
  console.log('예외 발생');
  if(err instanceof TypeError) {
    console.log('타입에러 발생');
  } else if(err instanceof ReferenceError) {
    console.log('참조에러 발생');
  }
} finally {
  // 정상, 에러 여부 상관없이 무조건 실행되는 영역
  console.log('파이널리 실행');
}