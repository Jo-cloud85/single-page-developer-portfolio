const nameInput = document.querySelector('#name-input');
const nameInputErr = document.querySelector('#name-err')

const emailInput = document.querySelector('.email-input-div #email-input');
const emailInputErr = document.querySelector('#email-err');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const exclamation = document.querySelector('.email-input-div #exclamation');

const msgInput = document.querySelector('#msg-input');
const msgInputErr = document.querySelector('#msg-err');

const sendMsg = document.querySelector(".send-msg-text");

function validateInput() {
    // If the user clicks on the 'send message' button w/o input, throw error.
    const fields = [
        { input: nameInput, err: nameInputErr },
        { input: emailInput, err: emailInputErr },
        { input: msgInput, err: msgInputErr }
      ];

    isValidInput = true;

    let hasInvalidEmail = false;
      
    fields.forEach(field => {
        const value = field.input.value.trim();

        if (value === '') {
            isValidInput = false;
            field.input.classList.add('red-underline');
            field.err.classList.add(`${field.input.name}-err`);
            field.err.innerHTML = 'This field is required';
        } else if (field.input.type === 'email' && !emailRegex.test(value)) {
            isValidInput = false;
            hasInvalidEmail = true;
            field.input.classList.add('red-underline');
            field.err.classList.add('email-err');
            field.err.innerHTML = 'Sorry, invalid format here';
        } else {
            field.input.classList.remove('red-underline');
            field.err.classList.remove(`${field.input.name}-err`); 
            field.err.innerHTML = '';
        }
    });

    if (isValidInput) {
        alert ('Your message have been submitted!');
        
        // Get the input values
        const name = nameInput.value;
        const email = emailInput.value;
        const message = msgInput.value;

        // Create a CSV string with the input values
        const csv = 'Name,Email,Message\n' + name + ',' + email + ',' + message + '\n';

        downloadCSV(csv);

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';
        msgInput.value = '';
        exclamation.innerHTML = '';

    } else {
        if (hasInvalidEmail) {
            exclamation.classList.add('exclamation');
            exclamation.innerHTML = '&#9432;';
        } else {
            exclamation.classList.remove('exclamation');
            exclamation.innerHTML = '';
        }
    }
}

function downloadCSV(csv) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'contact.csv';
    link.click();
}

function submitForm() {
    sendMsg.addEventListener('click', () => {
        validateInput();
        // document.getElementById('contact-form').submit();
    });
}

submitForm();