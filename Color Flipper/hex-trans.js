const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const circle = document.getElementById("circle");
const text = document.getElementById("text");
const mainText = document.getElementById("main-text");
const alertMessage = document.getElementById("message");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const fileds = [one, two, three, four, five, six, seven, eight];

const setHexColor = () => {
  const color = `#${one.value}${two.value}${three.value}${four.value}${five.value}${six.value}${seven.value}${eight.value}`;

  text.textContent = color;
  circle.style.backgroundColor = color;
};

const setHexColorOnLoad = () => {
  let color = "#";
  let temp = "";

  for (let index = 0; index < 8; index++) {
    temp = hexValues[Math.floor(Math.random() * hexValues.length)];
    color += temp;
    fileds[index].value = temp;
  }

  text.textContent = color;
  circle.style.backgroundColor = color;
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

document.addEventListener("DOMContentLoaded", setHexColorOnLoad);
one.addEventListener("change", setHexColor);
two.addEventListener("change", setHexColor);
three.addEventListener("change", setHexColor);
four.addEventListener("change", setHexColor);
five.addEventListener("change", setHexColor);
six.addEventListener("change", setHexColor);
seven.addEventListener("change", setHexColor);
eight.addEventListener("change", setHexColor);
mainText.addEventListener("click", copyTextToClipboard);
