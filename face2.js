// Add event listener to login form
document.querySelector('.login-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get input values
    const email = document.querySelector('.login-form input[type="email"]').value;
    const password = document.querySelector('.login-form input[type="password"]').value;
    // Validate input values
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }
    // Login logic here
    console.log('Login successful!');
});
