const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', onFormElemSubmit);

function onFormElemSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  }
  const formData = { email, password };
  console.log(formData);
  formElem.reset();
}

const labelsElem = document.querySelectorAll('label');
console.log(labelsElem);
labelsElem.forEach(elem => {
  elem.classList.add('label');
});

const inputsElem = document.querySelectorAll('input');
console.log(inputsElem);
inputsElem.forEach(elem => {
  elem.classList.add('input-log-form');
});

const btnElem = document.querySelector('button');
btnElem.classList.add('log-btn');
