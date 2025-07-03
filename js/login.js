const pass=document.querySelector('.password-input');
const err=document.querySelector('.error-message');
const passinput=document.querySelector('.input-container');
const errbtn=document.querySelector('.error-btn');
const passwordInput = document.querySelector('.password-input');


pass.addEventListener('input', async () => {
 const entered = pass.value;
    if (entered.length === 4) {
    const isvalid = await validatePIN(entered,'2005');
    if (isvalid) {
        window.location.href = 'mainwindows.html';
    }
    else {
        passinput.style.display = 'none';
        err.style.display = 'block';
    }
    }
});

errbtn.addEventListener('click', () => {
    passwordInput.value = '';
    passinput.style.display = 'block';
    err.style.display = 'none';
});
async function validatePIN(input,correct) {
    // Simulate an API call to validate the PIN
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(input === correct);
        }, 100); // Simulate a delay of 1 second
    });
}