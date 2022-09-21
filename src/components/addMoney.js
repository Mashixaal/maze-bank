let solde = 0;

const submit = () => {
   let results = parseInt(accountNumber.value);
   let total = (solde += results);
   sold.textContent = total;
   // return total;
}