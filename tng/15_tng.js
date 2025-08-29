// const timeNow = document.querySelector('#timeNow');
// const myStop = document.querySelector('#btnStop');
// const restart = document.querySelector('#btnRestart');
// let clock;

// myStop.addEventListener('click', () => {
//   clearInterval(clock);
// });

// restart.addEventListener('click', () => {
//     start();
// });

// function start() { 
//   nowTime();
//   clock = setInterval(() => {
//     nowTime();
//   }, 1000);
// }

// start();

// function nowTime() {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes().toString().padStart(2, '0');
//   const second = now.getSeconds().toString().padStart(2, '0');
//   let day = '';
//   let hour = hours
//     if (hours < 12) {
//       day = '오전'
//       hour = hours;
//     }else if (hours === 12) {
//       day = '오후';
//       hour = hours;
//     }
//     else {
//       day = '오후'
//       hour = hours - 12;
//     }
//   hour = hour.toString().padStart(2, '0')
//   timeNow.textContent = `현재 시각 ${day} ${hour}:${minutes}:${second}`;
//   }



//   모범 답안
nowTimeIntoElement('#timeNow');

let intervalNowTime = setInterval(() => {
  nowTimeIntoElement('#timeNow');
}, 1000)

// 멈춰 버튼 처리
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null;
})

// 재시작 버튼 처리
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
  nowTimeIntoElement('#timeNow');
  // clearInterval(intervalNowTime);  비동기처리로 한번 더 하므로 리소스(?)낭비이다.
  if(intervalNowTime === null) {
    intervalNowTime = setInterval(() => {
      nowTimeIntoElement('#timeNow');
    }, 1000)
  }
})

// 기록 버튼
const btnReport = document.querySelector('#btnReport')
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportContainer');
  let newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMillisecons();
  // newP.textContent = document.querySelector('#timeNow').textContent;
  container.appendChild(newP);
})

// 기록 초기화 버튼
const btnReportReset = document.querySelector('#btnReportReset')
btnReportReset.addEventListener('click', () => {
  document.querySelector('.reportContainer').textContent='';
})


// -------------------- 이하 함수 -------------------------------

// JS Doc(/**하고 엔터) : @파라미터 {리턴타입} 파라미터 명
/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {string} selector 
 */
function nowTimeIntoElement(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
}

/**
 * 현재시간을 `오전 hh:mm:SS` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormat() {
  const now = new Date();
  // return now.toLocaleTimeString();  간단하게 오전|오후 시,분,초를 가져올 수 있다.
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  }else { 
    ampm = '오후';
    hours -= 12;
  }
  return `${ampm} ${hours.toString().padStart(2, '0')}:` 
  + `${minutes.toString().padStart(2, '0')}:` 
  + `${seconds.toString().padStart(2, '0')}`;
}

/**
 * 현재시간을 `오전 hh:mm:SS.sss` 형식으로 반환
 * @returns 
 */
function generateNowTimeFormatUntilMillisecons() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();
  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  }else { 
    ampm = '오후';
    hours -= 12;
  }
  return `${ampm} ${hours.toString().padStart(2, '0')}:` 
  + `${minutes.toString().padStart(2, '0')}:` 
  + `${seconds.toString().padStart(2, '0')}.` 
  + `${milliseconds.toString().padStart(3, '0')}`;
}