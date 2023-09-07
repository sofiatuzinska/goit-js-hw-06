
const li = document.querySelectorAll('#categories > li.item');

console.log(`Number of categories: ${li.length}`);


const arrayCategories = document.querySelectorAll('h2');
arrayCategories.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});


