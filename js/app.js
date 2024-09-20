let menuMobile = document.querySelector('.menu-mobile')
let btnCloseMenu = document.querySelector('#btn-close-menu')

function openMenu(){
    menuMobile.classList.remove('screen-hidden')
}

function closeMenu(){
    menuMobile.classList.add('screen-hidden')
}

/* -==-----------add loading---------------- */
const addLoadingOnPage = () => {
    const loading = document.querySelector('.loading')
    loading.classList.remove('screen-hidden')
    
}
/* -==-----------add loading---------------- */
const removeLoadingOnPage = () => {
    const loading = document.querySelector('.loading')
    const textInformation = document.querySelector('.register-success')

    loading.classList.add('screen-hidden')
    textInformation.classList.remove('screen-hidden')

}

function refreshPage(){
    window.location.reload()
}

/* -----------------send data plan------------------ */

const handleSubmit = (event) =>{
    event.preventDefault()
    addLoadingOnPage()

    const name = document.querySelector('input[name=name]').value
    const sobrenome = document.querySelector('input[name=sobrenome]').value
    const email = document.querySelector('input[name=email]').value
    const telefone = document.querySelector('input[name=telefone]').value
   
    fetch("https://api.sheetmonkey.io/form/4TRo8JpRzk56mrWdMW8uM6", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, sobrenome, email, telefone}) ,
    }).then(() =>{
        removeLoadingOnPage()

        setInterval(refreshPage, 2000)

    })
}

document.querySelector('form').addEventListener('submit', handleSubmit)


