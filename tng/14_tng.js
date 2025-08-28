const container = document.querySelector("#container")
container.classList.add('all');
const botton = document.querySelector("#make");
const content = document.querySelector("#content");

// 버튼 누르면 Input의 text obj에 넣는 코드
botton.addEventListener('click', () => {
  const coment = document.querySelector("#coment");
  // 빈칸은 입력할 수 없게 하는 코드
  if (!coment.value == '') {
    obj(coment.value);
  }
  return coment.value = '';
})


// 글자 입력하면 상자 나오게하는 함수
function obj(str) {
  const input = document.createElement('div');
  input.textContent = str;
  input.classList.add('boxstyle');
  content.appendChild(input);
  content.classList.add('content-box');

  // 완료항목 글자에 선 긋게하기
  input.addEventListener('click', () => {
    input.classList.toggle('line');
  })


    // X누르면 요소 지우기
    const cancel = document.createElement('button');
    cancel.textContent = 'X';
    cancel.classList.add('xbox');
    input.appendChild(cancel);
    cancel.addEventListener('click', () => {
      content.removeChild(input);
    })
  }

//엔터 입력해도 동작하게 만들기 (버튼과 같은 동작이므로 불러와서 처리)
const keyval = document.querySelector("#coment");
keyval.addEventListener('keypress', (val) => {
  if (val.key === 'Enter') {
    //엔터 입력 시 버튼 클릭 이벤트 발생
    botton.click();
    // const coment = document.querySelector("#coment");
    // if (!coment.value == '') {
    // obj(coment.value);
    // }
    // return coment.value = '';
  }
})