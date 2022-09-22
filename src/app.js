// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png/opti.png';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//      // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);
//     return element;
//   }

//   document.body.appendChild(component());

// console.log("script ok");

// let button = document.getElementById("dark-mode");
// let body = document.querySelector("body");

// function darkMode() {
//    body.classList.toggle("bg-black");
//    body.classList.toggle("text-white");
// }

// button.addEventListener("click", darkMode);

const accountNumber = document.getElementById("input-deposite");
const btn = document.getElementById("submit-number");
const resultAccount = document.getElementById("result-account");
const sold = document.getElementById("solde");
const withdrawSold2 = document.getElementById("input-withdraw");
const button = document.getElementById("submit-number2");

let solde = 0;

const submit = () => {
  let results = parseInt(accountNumber.value);
  let total = (solde += results);
  sold.textContent = total;
};

btn.addEventListener("click", submit);

const withdrawSold = () => {
  let value = parseInt(withdrawSold2.value);
  let total = (solde -= value);
  sold.innerHTML = total;
};

button.addEventListener("click", withdrawSold);
withdrawSold2.addEventListener("keydown", (key) => {
  console.log(key);
});
