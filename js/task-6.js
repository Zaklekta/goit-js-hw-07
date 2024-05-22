function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let amount;
const refs = {
  inputElem: document.querySelector('input'),
  btnCreateElem: document.querySelector('button'),
  btnDestroyElem: document.querySelector('[data-destroy]'),
  divBoxElem: document.querySelector('#boxes'),
  divBoxControlElem: document.querySelector('#controls'),
};

refs.divBoxControlElem.classList.add('controls-container');
refs.inputElem.classList.add('input');
refs.btnCreateElem.classList.add('btn');
refs.btnDestroyElem.classList.add('btn');
refs.btnDestroyElem.classList.add('destroy-btn');

refs.btnCreateElem.addEventListener('click', onBtnCreateClick);
refs.btnDestroyElem.addEventListener('click', onBtnDestroyClick);

function onBtnDestroyClick(event) {
  destroyBoxes();
  console.log(refs.inputElem.value);
  refs.divBoxElem.classList.remove('boxes-container');
  location.reload();
}

function onBtnCreateClick(event) {
  if (refs.inputElem.value >= 1 && refs.inputElem.value <= 100) {
    amount = refs.inputElem.value;
  }
  createBoxes(amount);
  if (refs.inputElem.value !== '' && refs.inputElem.value <= 100) {
    refs.divBoxElem.classList.add('boxes-container');
  }
  refs.inputElem.value = '';
}

function createBoxes(amount) {
  let divElemsStr = '';
  let width = 20;
  let height = 20;
  for (let i = 1; i <= amount; i++) {
    width += 10;
    height += 10;
    divElemsStr += `<div class="box" style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>\n`;
  }
  refs.divBoxElem.innerHTML = divElemsStr;
}

function destroyBoxes() {
  refs.divBoxElem.innerHTML = '';
}
