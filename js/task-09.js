function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



let chnBtn = document.querySelector("change-color");
const showColor = document.querySelector(".color");


chnBtn = addEventListener("click", () => {
  const getHex = getRandomHexColor();
  document.body.style.backgroundColor = getHex;
  showColor.textContent = getHex;
});
