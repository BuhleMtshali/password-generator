const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
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
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordInputOneElement = document.querySelector("#optionOne");
let passwordInputTwoElement = document.querySelector("#optionTwo");

function generatePassword(event) {
  event.preventDefault();

  let passwordOne = "";
  let passwordTwo = "";

  for (let i = 0; i < 15; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);

    passwordOne += characters[randomIndexOne];
    passwordTwo += characters[randomIndexTwo];
  }

  passwordInputOneElement.innerHTML = passwordOne;
  passwordInputTwoElement.innerHTML = passwordTwo;
}
buttonElement = document.querySelector("#generate-button");
buttonElement.addEventListener("click", generatePassword);

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

let copyButtonOne = document.querySelector("#copy-optionOne");
copyButtonOne.addEventListener("click", () => {
  copyToClipboard(passwordInputOneElement.innerText);
});

let copyButtonTwo = document.querySelector("#copy-optionTwo");
copyButtonTwo.addEventListener("click", () => {
  copyToClipboard(passwordInputTwoElement.innerText);
});
