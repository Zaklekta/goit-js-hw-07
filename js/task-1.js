'use strict';
const listElem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listElem.length}`);

listElem.forEach(function callback(elem, index, array) {
  const headerElem = elem.querySelector('h2');
  headerElem.classList.add('item-header');
  console.log(`Category: ${headerElem.textContent}`);
  const itemElem = elem.querySelectorAll('li');
  console.log(`Elements: ${itemElem.length}`);
});

const categoryList = document.querySelectorAll('.item > ul');
categoryList.forEach(elem => {
  elem.classList.add('category-list');
});

const categoryItem = document.querySelectorAll('ul.category-list>li');
categoryItem.forEach(elem => {
  elem.classList.add('category-item');
});
