const btnDesk = document.querySelector('#counter button[data-action="decrement"]');

const btnIncr = document.querySelector('#counter button[data-action="increment"]')

const counter= document.querySelector("#value")

let counterValue = 0;

btnDesk.addEventListener("click", () =>{
    counterValue -= 1;
    counter.textContent = counterValue;
})
btnIncr.addEventListener("click", () =>{
    counterValue += 1;
    counter.textContent = counterValue;
})
console.log(counter)