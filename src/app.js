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

const accountNumber = document.getElementById("account-number");
const btn = document.getElementById("submit-number");
const resultAccount = document.getElementById("result-account");
const sold = document.getElementById("solde");

let solde = 0;

const submit = () => {
   let results = parseInt(accountNumber.value);
   let total = (solde += results);
   sold.textContent = total;
   // return total;
}
console.log(accountNumber);

btn.addEventListener("click", submit);

buttonDepo.addEventListener("click", addSold);
  
const withdrawSold = () => {
  let value = parseInt(withdrawCash.value);
  let total = (currentSold -= value);
  resultsSold.innerHTML = total;
  return total;
};

buttonWithdraw.addEventListener("click", withdrawSold);
