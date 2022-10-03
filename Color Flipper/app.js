const simpleButton = document.getElementById("simple-button");
const text = document.getElementById("text");
const mainText = document.getElementById("main-text");
const alertMessage = document.getElementById("message");

const getFormat = () => {
  const format = ["rgb", "hsl", "hex"];

  return format[Math.floor(Math.random() * format.length)];
};

const getNumbers = () => {
  return Math.floor(Math.random() * 255);
};

const getHexNumbers = () => {
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

  return numbers[Math.floor(Math.random() * numbers.length)];
};

const changeColor = () => {
  var format = getFormat();

  if (format === "rgb") {
    format += "(";

    for (let index = 0; index < 3; index++) {
      format += getNumbers();

      if (index !== 2) {
        format += ", ";
      }
    }

    format += ")";
  } else if (format === "hsl") {
    format += `(${Math.floor(Math.random() * 360)}, ${Math.floor(
      Math.random() * 100
    )}%, ${Math.floor(Math.random() * 100)}%)`;
  } else {
    format = "#";

    for (let index = 0; index < 6; index++) {
      format += getHexNumbers();
    }
  }

  text.textContent = format;

  document.body.style.backgroundColor = format;
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

simpleButton.addEventListener("click", changeColor);
document.addEventListener("DOMContentLoaded", changeColor);
mainText.addEventListener("click", copyTextToClipboard);
