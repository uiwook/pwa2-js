const btn = document.querySelector('#btn');
const btn_safe = document.querySelector('#btn_safe');
const url_box = document.querySelector('#url_box');
const container = document.querySelector('.container');
const reset = document.querySelector('#reset');


// 버튼 누르면 url값 전달
btn.addEventListener('click', () => {
  wait();
  container.textContent = '';
  imgfx(url_box.value);
  return url_box.value = '';
});

// 버튼 누르면 url값 전달(보존)
btn_safe.addEventListener('click', () => {
  imgfx(url_box.value)
  return url_box.value = '';
});

// Enter눌러도 url값 전달
url_box.addEventListener('keypress', (press) => {
  if(press.key === 'Enter') {
    container.textContent = '';
    imgfx(url_box.value)
    return url_box.value = '';
  }
});

// 초기화
reset.addEventListener('click', () => {
  container.textContent = '';
  return url_box.value = '';
});

// ------------아래 함수------------------------


// url 불러오는 async함수
async function imgfx(url) {
  const get_img = await axios.get(url);
  try {
    get_img.data.forEach(item => {
      let newimg = document.createElement('img');
      newimg.classList.add('img_css');
      newimg.setAttribute('src', item?.download_url);
      container.appendChild(newimg);
      
      //카드 클릭한거 없애기
      newimg.addEventListener('click', () => {
        container.removeChild(newimg);
      });
    });
  } catch (err) {
    console.log(err);
  }
}

// 유저의 입력값 줄이기
const num_box = document.querySelector('#num_box');
const count_box = document.querySelector('#count_box');
const short_btn = document.querySelector('#short_btn')

function short(num, count) {
  imgfx('https://picsum.photos/v2/list?page=' + num +'&limit=' + count);
}

// 줄인 input에 Enter로 값넣기
short_btn.addEventListener('click', () => {
  container.textContent = '';
  short(num_box.value, count_box.value);
  num_box.value = '';
  count_box.value = '';
});

// 대기중
function wait() {
  const block = document.querySelector('#block');
  const wait_btn = document.createElement('button')
  block.classList.add('container_block')
  wait_btn.textContent = '로딩중';
  wait_btn.classList.add('wait_btn');
  block.appendChild(wait_btn);
  setTimeout(() => {
  block.classList.toggle('container_block')
  block.removeChild(wait_btn);
  }, 1000)
}