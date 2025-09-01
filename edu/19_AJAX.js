
let url = 'https://picsum.photos/v2/list?page=1&limit=10';

// axios를 사용하여 url 불러오기
// axios.method(url) get은 http의 method
// axios.get(url)
// .then(response => {
//   response.data.forEach((item, idx) => {
//     const newImg = document.createElement('img');
//     newImg.setAttribute('src', item?.download_url);
//     newImg.setAttribute('width', '300px')
//     const container = document.querySelector('.container');
//     container.appendChild(newImg);
//   });
// })
// .catch(err => {
//   console.log(err);
// });

// async를 사용하여 url 불러오기
async function test(url) {
  const response = await axios.get(url);
  try {
    response.data.forEach((item, idx) => {
      const newImg = document.createElement('img');
      newImg.setAttribute('src', item?.download_url);
      newImg.setAttribute('width', '300px')
      const container = document.querySelector('.container');
      container.appendChild(newImg);
    });
  } catch (err) {
    console.log(err);
  }
}
test(url);

