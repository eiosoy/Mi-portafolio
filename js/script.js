const Name = document.querySelector('[name=username]');
const email = document.querySelector('[name=email]');


const emptyField = (e) => {
    const field = e.target
    const value = e.target.value;
    if (value.length === 0) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.innerText = `${field.name} is required`
    }else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.innerText = ""
    }
}

Name.addEventListener('blur', function (e) {
const field = e.target
const data = e.target.value
if(data === 0){
field.classList.add('invalid')
field.nextElementSibling.classList.add('error')
field.nextElementSibling.innerText = "Name is required"
} else {
    field.classList.remove('invalid')
    field.nextElementSibling.classList.remove('error')
    field.nextElementSibling.innerText = ""
}
})

/*const validateEmailFormat = e => {
    const field = e.target;
    const regEx = RegExp('/^[/w-\.]+@([\w-]+\.)+[\w.]{2,4}$/')
    console.log(regEx.test(field.value))
}*/


Name.addEventListener('blur', emptyField);
//validateEmailFormat.addEventListener('blur', emptyField);