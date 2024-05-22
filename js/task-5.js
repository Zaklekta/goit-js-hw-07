function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

const spanElem = document.querySelector('.color');
const btnElem = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');

btnElem.addEventListener('click', onBtnElemClick);
function onBtnElemClick(event) {
  bodyElem.style.backgroundColor = getRandomHexColor();
  spanElem.textContent = getRandomHexColor();
}

const colorTextElem = document.querySelector('.widget > p');
colorTextElem.classList.add('text-color');
