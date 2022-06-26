const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newList = document.querySelector("#ingredients");

// const list1 = document.createElement("li");
// list1.textContent = (ingredients[0]);
// list1.classList.add("listIngr")


// const list2 = document.createElement("li");
// list2.textContent = (ingredients[1]);
// list2.classList.add("listIngr")


// const list3 = document.createElement("li");
// list3.textContent = (ingredients[2]);
// list3.classList.add("listIngr")


// const list4 = document.createElement("li");
// list4.textContent = (ingredients[3]);
// list4.classList.add("listIngr")


// const list5 = document.createElement("li");
// list5.textContent = (ingredients[4]);
// list5.classList.add("listIngr")


// const list6 = document.createElement("li");
// list6.textContent = (ingredients[5]);
// list6.classList.add("listIngr");


const fnLi = (elLi) => {
  const creEl = document.createElement("li");
  creEl.classList.add("items");
  creEl.textContent = elLi;
  return creEl
}

const addAList = ingredients.map((el) =>{
  return fnLi(el);

})
console.log(addAList)
newList.prepend(...addAList)

// newList.prepend(list1, list2, list3, list4, list5, list6)
