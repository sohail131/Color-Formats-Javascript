const circle = document.getElementById("circle");
const text = document.getElementById("text");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const alpha = document.getElementById("alpha");
const mainText = document.getElementById("main-text");
const alertMessage = document.getElementById("message");

const getRandomNumber = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomAlphaNumber = () => {
  return Math.random().toFixed(1);
};

const setRBGAColor = () => {
  text.textContent = `RGBA(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`;
  circle.style.backgroundColor = `RGBA(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`;
};

const setRandomColor = () => {
  red.value = getRandomNumber();
  green.value = getRandomNumber();
  blue.value = getRandomNumber();
  alpha.value = getRandomAlphaNumber();

  text.textContent = `RGBA(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`;
  circle.style.backgroundColor = `RGBA(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`;

  getRandomAlphaNumber();
};

const copyTextToClipboard = () => {
  navigator.clipboard
    .writeText(text.innerText)
    .then(showCopiedMessage)
    .catch((err) => alert(err));
};

const showCopiedMessage = () => {
  alertMessage.style.visibility = "visible";

  setTimeout(hideAlertMessage, 3000);
};

const hideAlertMessage = () => {
  alertMessage.style.visibility = "hidden";
};

document.addEventListener("DOMContentLoaded", setRandomColor);
red.addEventListener("input", setRBGAColor);
green.addEventListener("input", setRBGAColor);
blue.addEventListener("input", setRBGAColor);
alpha.addEventListener("input", setRBGAColor);
mainText.addEventListener("click", copyTextToClipboard);
