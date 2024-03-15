document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("hello");
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let password = document.getElementById('password').value;
    let address = document.getElementById('address').value;

    fetch('http://localhost:8080/Add/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            mobile: mobile,
            password: password,
            address: address
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(isRegistered => {
        if (isRegistered) {
            alert('Registration successful! Please login.'); // Display success message
            window.location.href = 'login.html'; // Redirect to login page after successful registration
        } else {
            alert('Registration failed! Username or email may already exist.'); // Display error message
        }
    })
    .catch(error => {
        console.error('Error during registration:', error);
    });
});
