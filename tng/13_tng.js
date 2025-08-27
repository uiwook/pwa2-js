const koreanChess = document.createElement('li');
koreanChess.textContent = '장기';
const chessDp = document.querySelector('#apple');
document.querySelector('#ul').insertBefore(koreanChess, chessDp);

const colorBrick = document.querySelector('#ul :nth-last-child(1)');
colorBrick.style.backgroundColor = 'beige';

const colorOdd = document.querySelectorAll('#ul :nth-child(odd)');
const colorEven = document.querySelectorAll('#ul :nth-child(even)');
colorOdd.forEach((val) => val.style.color = 'red');
colorEven.forEach((val) => val.style.color = 'blue');

// document.querySelectorAll('#ul li').forEach((val, idx) => {
//   if(idx % 2 === 1) {
//     val.style.color = 'red';
//   } else {
//     val.style.color = 'blue';
//   }
// });

const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'https://www.admin.com/img/posts/laksfjakls.png'
};
const hello = {
  title: '타이틀2',
  content: '내용내용2',
  img: 'https://www.admin.com/img/posts/laksfjakls.png'
};
// 카드 구조 만들기
addCard(result);
function addCard(item) {

const newCard = document.createElement('div');
newCard.classList.add('card');

const newCardImg = document.createElement('div');
newCardImg.classList.add('card-img');
const newCardTitle = document.createElement('p');
newCardTitle.classList.add('card-title');
newCardTitle.textContent = item.title;
const newCardContent = document.createElement('p');
newCardContent.textContent = item.content;

newCard.appendChild(newCardImg);
newCard.appendChild(newCardTitle);
newCard.appendChild(newCardContent);

document.body.appendChild(newCard);
}