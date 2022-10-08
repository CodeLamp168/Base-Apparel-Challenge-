const form = document.getElementById('form-area')
const emailForm = document.getElementById('email-input')
const errSym = document.getElementById('error-symbol')

form.addEventListener('submit', (e) => {
    
    const eValue = emailForm.value.trim();
    let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(eValue.match(emailValid))
    {
        emailForm.classList.add('correct')
        emailForm.classList.remove('error')
        errSym.classList.remove('error')
    }
    else {
        emailForm.classList.remove('correct')
        emailForm.classList.add('error')
        errSym.classList.add('error')
    }

    e.preventDefault();
})