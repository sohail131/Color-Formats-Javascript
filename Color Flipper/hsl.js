const circle = document.getElementById("circle");
const text = document.getElementById("text");
const hue = document.getElementById("hue");
const saturation = document.getElementById("saturation");
const lightness = document.getElementById("lightness");
const mainText = document.getElementById("main-text");
const alertMessage = document.getElementById("message");

const getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const setHSLColor = () => {
  text.textContent = `HSL(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
  circle.style.backgroundColor = `HSL(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
};

const getHue = () => {
  return Math.floor(Math.random() * 360);
};

const getSaturation = () => {
  return Math.floor(Math.random() * 100);
};

const getLightness = () => {
  return Math.floor(Math.random() * 100);
};

const setRandomColor = () => {
  hue.value = getHue();
  saturation.value = getSaturation();
  lightness.value = getSaturation();

  text.textContent = `HSL(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
  circle.style.backgroundColor = `HSL(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
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
hue.addEventListener("input", setHSLColor);
saturation.addEventListener("input", setHSLColor);
lightness.addEventListener("input", setHSLColor);
mainText.addEventListener("click", copyTextToClipboard);
