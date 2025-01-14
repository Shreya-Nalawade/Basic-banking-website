document.getElementById('depositForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        // Update balance in local storage or a global variable
        let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;
        currentBalance += amount;
        localStorage.setItem('balance', currentBalance);

        // Log the transaction
        let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.push({ type: 'Deposit', amount: amount });
        localStorage.setItem('transactions', JSON.stringify(transactions));

        // Redirect to the homepage
        window.location.href = 'homepage.html';
    } else {
        alert("Please enter a valid amount.");
    }
});