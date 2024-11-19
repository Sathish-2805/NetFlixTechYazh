// Register Form Submission
const registerForm = document.getElementById('register');
if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input
        const username = document.getElementById('register-username').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value.trim();

        if (username && email && password) {
            // Store user data in session storage
            const userData = { username, email, password };
            sessionStorage.setItem('user', JSON.stringify(userData));
            alert('Registration successful! ');

            // Redirect to login page
            window.location.href = 'index.html';
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Login Form Submission
const loginForm = document.getElementById('login');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();

        // Retrieve user data from session storage
        const userData = JSON.parse(sessionStorage.getItem('user'));

        if (userData) {
            // Validate user credentials
            if (email === userData.email && password === userData.password) {
                alert(`Welcome, ${userData.username}!`);
                // Redirect to a dashboard or homepage
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid email or password.');
            }
        } else {
            alert('No user registered. Please sign up first.');
        }
    });
}
