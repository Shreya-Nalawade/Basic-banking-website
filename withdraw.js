 // Handle withdrawal
 document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    const balance = parseFloat(localStorage.getItem('balance')) || 0;

    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        // Update balance
        const newBalance = balance - withdrawAmount;
        localStorage.setItem('balance', newBalance);
        
        // Update transactions
        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.push({ type: 'Withdraw', amount: withdrawAmount });
        localStorage.setItem('transactions', JSON.stringify(transactions));

        // Display success message
        document.getElementById('withdraw-message').innerText = `Successfully withdrew ₹${withdrawAmount.toFixed(2)}.`;
    } else {
        document.getElementById('withdraw-message').innerText = 'Invalid withdrawal amount.';
    }
    
});