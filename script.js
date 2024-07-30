document.addEventListener('DOMContentLoaded', function() {
    const initialTransactions = [
    ];

    
    initialTransactions.forEach(transaction => addTransaction(transaction));

    
    document.getElementById('transaction-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const type = document.getElementById('type').value;
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        
        // Validate form
        if (type === '' || name === '' || amount === '') {
            alert('Please fill in all fields');
            return;
        }
        
        // Create new transaction
        const transaction = { type, name, amount: parseFloat(amount) };
        
        // Add transaction to table
        addTransaction(transaction);
        
        // Clear form fields
        document.getElementById('transaction-form').reset();
    });
});

function addTransaction(transaction) {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${transaction.type}</td>
        <td>${transaction.name}</td>
        <td>$${transaction.amount}</td>
        <td><span class="delete-btn">Delete</span></td>
    `;
    
    // Append row to transaction list
    document.getElementById('transaction-list').appendChild(tr);
    
    // Add delete event to the delete button
    tr.querySelector('.delete-btn').addEventListener('click', function() {
        tr.remove();
    });
}
