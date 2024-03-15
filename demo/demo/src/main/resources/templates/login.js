document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Extract username and password from the form
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(isValidUser => {
        // Check if the user is valid based on the response
        if (isValidUser) {
            window.location.href = 'home.html'; // Redirect to home page if user is valid
        } else {
            alert('Invalid username or password'); // Display error message
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
        // Handle other errors
    });
});
