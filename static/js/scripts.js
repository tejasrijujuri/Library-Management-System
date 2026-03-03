document.addEventListener('DOMContentLoaded', function() {
    // Example: Form validation for login or registration
    const loginForm = document.querySelector('.login-register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.querySelector('#username').value.trim();
            const password = document.querySelector('#password').value.trim();
            
            if (username === "" || password === "") {
                event.preventDefault();
                alert("Username and password cannot be empty.");
            }
        });
    }

    // Example: Dynamic functionality for user actions
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.dataset.bookId;
            alert(`Ordering book with ID: ${bookId}`);
            // Add your custom logic to handle the order
        });
    });
});
