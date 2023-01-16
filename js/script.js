const menu = document.getElementById('menu')

menu.addEventListener('scroll', (e) => {
    const value = e.target.value
    if(value == true) {
        menu.classList.add('menu--active')
        menu.classList.remove('menu')
    } else {
        menu.classList.remove('menu--active')
        menu.classList.add('menu')
    }
})
