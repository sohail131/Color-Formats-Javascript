const circle = document.getElementById("circle");
const text = document.getElementById("text");
const hue = document.getElementById("hue");
const saturation = document.getElementById("saturation");
const lightness = document.getElementById("lightness");
const alpha = document.getElementById("alpha");
const mainText = document.getElementById("main-text");
const alertMessage = document.getElementById("message");

const setHexColor = () => {
  text.textContent = `HSLA(${hue.value}, ${saturation.value}%, ${lightness.value}%, ${alpha.value})`;
  circle.style.backgroundColor = `HSLA(${hue.value}, ${saturation.value}%, ${lightness.value}%, ${alpha.value})`;
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

const getAlpha = () => {
  return Math.random().toFixed(1);
};

const setRandomColor = () => {
  hue.value = getHue();
  saturation.value = getSaturation();
  lightness.value = getSaturation();
  alpha.value = getAlpha();

  text.textContent = `HSLA(${hue.value}, ${saturation.value}%, ${lightness.value}%, ${alpha.value})`;
  circle.style.backgroundColor = `HSLA(${hue.value}, ${saturation.value}%, ${lightness.value}%, ${alpha.value})`;
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
hue.addEventListener("input", setHexColor);
saturation.addEventListener("input", setHexColor);
lightness.addEventListener("input", setHexColor);
alpha.addEventListener("input", setHexColor);
mainText.addEventListener("click", copyTextToClipboard);
