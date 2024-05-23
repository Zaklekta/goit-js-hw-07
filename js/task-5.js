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
  let currentColor = getRandomHexColor();
  bodyElem.style.backgroundColor = currentColor;
  spanElem.textContent = currentColor;
}

const colorTextElem = document.querySelector('.widget > p');
colorTextElem.classList.add('text-color');
