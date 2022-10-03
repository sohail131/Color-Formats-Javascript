const text = document.getElementById("text");
const circle = document.getElementById("circle");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const mainText = document.getElementById("main-text");
const alertMessage = document.getElementById("message");

const numbers = [
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
const fields = [one, two, three, four, five, six];

const getNumbers = () => {
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const setHexColor = () => {
  const color = `#${one.value}${two.value}${three.value}${four.value}${five.value}${six.value}`;

  text.textContent = color;
  circle.style.backgroundColor = color;
};

const setRandomHex = () => {
  let color = "#";
  let temp;

  for (let index = 0; index < 6; index++) {
    temp = getNumbers();
    color += temp;
    fields[index].value = temp;
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

document.addEventListener("DOMContentLoaded", setRandomHex);
one.addEventListener("change", setHexColor);
two.addEventListener("change", setHexColor);
three.addEventListener("change", setHexColor);
four.addEventListener("change", setHexColor);
five.addEventListener("change", setHexColor);
six.addEventListener("change", setHexColor);
mainText.addEventListener("click", copyTextToClipboard);
