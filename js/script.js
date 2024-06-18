// Get form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const eventDateInput = document.getElementById('event-date');
const numberOfTicketsInput = document.getElementById('number-of-tickets');

// Function to validate form inputs
function validateForm() {
    // Validate name
    if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
        alert('Name must contain only letters and spaces');
        return false;
    }

    // Validate email
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
        alert('Invalid email format');
        return false;
    }

    // Validate phone number
    if (!/^(?:\+?1)?[-. ]?(\(?\d{3}\)?)?[-. ]?(\d{3})[-. ]?(\d{4})$/.test(phoneInput.value)) {
        alert('Invalid phone number format');
        return false;
    }

    // Validate event date
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(eventDateInput.value)) {
        alert('Invalid date format');
        return false;
    }

    // Validate number of tickets
    if (numberOfTicketsInput.value < 1 || numberOfTicketsInput.value > 10) {
        alert('Number of tickets must be between 1 and 10');
        return false;
    }

    // If all inputs are valid, submit the form
    document.getElementById('event-form').submit();
}

// Add event listener to form submission
document.getElementById('event-form').addEventListener('submit', validateForm);