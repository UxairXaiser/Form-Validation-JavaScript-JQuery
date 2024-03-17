// Sign In Form Validation
$('#signInForm').submit(function(event) {
    event.preventDefault();
    let username = $('#username').val();
    let password = $('#password').val();
    if (username.trim() === '' || password.trim() === '') {
        alert('Username and password cannot be empty.');
        return;
    }
    // Perform sign-in logic
});

// Sign Up Form Validation
$('#signUpForm').submit(function(event) {
    event.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();
    let passwordRegex = /^(?=.*[!@#$%^&*()])(?=.*\d).{8,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '' || password.trim() === '') {
        alert('Email and password cannot be empty.');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('Password must contain at least one special character and one numeric character.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Email must be in a valid format.');
        return;
    }

    // Perform sign-up logic
});
