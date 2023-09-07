const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

function createMarkup(arr) {
  const markup = arr.map((product) => {

    const liEl = document.createElement("li");

    liEl.classList.add('item')

    liEl.textContent = product;
    liEl.append();
    return liEl;
  });

  list.append( ...markup );
  
}

createMarkup(ingredients);