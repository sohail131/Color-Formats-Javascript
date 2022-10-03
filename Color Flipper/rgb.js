const circle = document.getElementById("circle");
const text = document.getElementById("text");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const mainText = document.getElementById("main-text");
const alertMessage = document.getElementById("message");

const getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const setRBGColor = () => {
  text.textContent = `RGB(${red.value}, ${green.value}, ${blue.value})`;
  circle.style.backgroundColor = `RGB(${red.value}, ${green.value}, ${blue.value})`;
};

const setRandomColor = () => {
  red.value = getRandomNumber();
  green.value = getRandomNumber();
  blue.value = getRandomNumber();

  text.textContent = `RGB(${red.value}, ${green.value}, ${blue.value})`;
  circle.style.backgroundColor = `RGB(${red.value}, ${green.value}, ${blue.value})`;
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
red.addEventListener("input", setRBGColor);
green.addEventListener("input", setRBGColor);
blue.addEventListener("input", setRBGColor);
mainText.addEventListener("click", copyTextToClipboard);
