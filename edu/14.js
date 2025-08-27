// 이벤트 
function test() {
  alert('테스트');
}

// Property Listener(프로퍼티 리스너) - 오늘날에 잘 안씀
const btn2 = document.querySelector('#btn2');
btn2.onclick =() => {
  alert('버튼2222');
}

// addEventListener
const btn3 = document.querySelector('#btn3');
  btn3.addEventListener('click', () => {
  alert('버튼333');
  });
  btn3.addEventListener('click', () => {
  alert('3333');
  });

  btn3.addEventListener('click', btn3Alert);
  // removeEnventListrener() : 이벤트 제거
  btn3.removeEventListener('click', btn3Alert);

  function btn3Alert (event){
    console.log(event);
    alert('333333');
  }

  window.addEventListener('scroll', () => {
    console.log('scroll test');
  })
  window.addEventListener('load', () => {
    window.open('https://www.google.com');
  })

// -------------------------------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  const regex = /^[0-9]+$/;

  const label = document.querySelector('#labelEmail');
  if(!regex.test(e.target.value)) {
    label.textContent = '숫자만 입력해주세요.';
  } else {
    label.textContent = '';
  }
});

// ---------------비밀번호 숨기기/보이기------------------

const chkPw = document.querySelector('#seepw');

// 체크박스에 체인지 이벤트 추가
chkPw.addEventListener('change', (e) => {
  // 인풋 패스워드 접근
  const pw = document.querySelector('#pw');
  // 체크 여부 확인 분기
  if(e.target.checked) {
    // 인풋 패스우드 type속성 text로 변경
    pw.setAttribute('type', 'text');
  } else {
    // 인풋 패스워드 type속성 password로 변경
    pw.setAttribute('type', 'password');
  }
});



const plus = document.querySelector('#plus');
plus.addEventListener('click', (e) => {
  // const num = document.querySelector('#num');
  
})