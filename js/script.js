const Name = document.querySelector('[name=username]');
const email = document.querySelector('[name=email]');

const setErrors = (message, field, isError = true) => {
    if(isError){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.innerText = message;
    } else {
        field.classList.remove('invalid')
        field.nextElementSibling.classList.remove('error')
        field.nextElementSibling.innerText = ""
    }
}


const emptyField = (message, e) => {
    const field = e.target
    const value = e.target.value;
    if (value.length === 0) {
        setErrors(message, field)
    }else {
        setErrors("", field, false)
    }
}


const validateEmail = e =>{
    const field = e.target;
    const data = e.target.value;
    const regEx = new RegExp (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
    if(data.trim().length > 5 && !regEx.test(data)){
        setErrors("Please enter a valid email", field)
    } else {
        setErrors("", field, false)
    }
}


Name.addEventListener('blur', (e) => emptyField("Name is required", e));
email.addEventListener('blur', (e) => emptyField("Please enter a valid email", e));
email.addEventListener('input', validateEmail);