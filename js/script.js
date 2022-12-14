const form = document.getElementById('form')
const button = document.getElementById('submitButton')

const name = document.getElementById('name')
const email = document.getElementById('email')


const formIsValid = {
    name: false,
    email: false,
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    validateForm()
})

name.addEventListener('change', (e) =>{
    if(e.target.value.trim().length > 0) 
    formIsValid.name = true
    })

email.addEventListener('change', (e) =>{
    if(e.target.value.trim().length > 0) 
    formIsValid.email = true
})

const validateForm = () =>{
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Invalid form')
}