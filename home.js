
const balance = parseFloat(localStorage.getItem('balance')) || 0;
/*Fetch balance from local storage, parseFloat is used to convert retrevied balance into float value
if there is no balance then it shows 0*/


document.getElementById('balance').innerText = `₹${balance.toFixed(2)}`;
/* In this line we find the id with balance and it will assign by rs symbol */



const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
/*This line fetch the transaction info convert it floating point and
 json is used to convert it into array and if there is no tracation then it shows empty array*/



const transactionsContainer = document.getElementById('transactions');
/*Finds the HTML element with the id of transactions (where transactions will be displayed). */

transactions.forEach((transaction, index) => {//arrow function 
    const transactionCard = document.createElement('div');//transation card navachi ek div kele new div in javasctipt
    transactionCard.className = 'transaction-card';//tye div la class name transaction card del
    transactionCard.innerHTML = `
        <h3>Transaction ${index + 1}</h3>
        <p>Type: ${transaction.type}</p>
        <p>Amount: ₹${transaction.amount.toFixed(2)}</p>
        
    `;
    transactionsContainer.appendChild(transactionCard);
});/*and tya card madhe transaction no, type and amount add kele and he transaction card append kele transaction container madhe html madhe aapn div banvle hote*/