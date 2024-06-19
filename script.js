document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault()

    // Get form input values
    const firstName = document.getElementById('fname').value.trim()
    const lastName = document.getElementById('lname').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()

    // Validation flags
    let isValid = true;

    // Clear previous error messages and styles
    clearError('fname')
    clearError('lname')
    clearError('email')
    clearError('password')

    if (!firstName) {
        showError('fname')
        isValid = false
    }

    if (!lastName) {
        showError('lname')
        isValid = false
    }

    if (!isValidEmail(email)) {
        showError('email')
        isValid = false
    }

    if (!password) {
        showError('password')
        isValid = false
    }

    if (isValid) {
        alert('Form submitted successfully!')
    }
})

function clearError(id) {
    const inputElement = document.getElementById(id)
    const errorMsg = document.querySelector('.' + id + '-error');

    inputElement.classList.remove('error')
    errorMsg.hidden = true
}

function showError(id) {
    const inputElement = document.getElementById(id)
    const errorMsg = document.querySelector('.' + id + '-error');

    inputElement.classList.add('error')
    errorMsg.hidden = false
}

function isValidEmail(email) {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}