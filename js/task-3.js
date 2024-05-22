const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('span');

inputElem.addEventListener('input', onInputElemChange);

function onInputElemChange(event) {
  const name = event.currentTarget.value.trim();
  if (name === '') {
    spanElem.textContent = 'Anonymous';
  } else {
    spanElem.textContent = name;
  }
}

inputElem.classList.add('name-input');
