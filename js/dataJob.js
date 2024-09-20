/* -==-----------add loading---------------- */
const addLoadingOnPage2 = () => {
    const loading = document.querySelector('.loading')
    loading.classList.remove('screen-hidden')
    
}
/* -==-----------add loading---------------- */
const removeLoadingOnPage2 = () => {
    const loading = document.querySelector('.loading')
    const textInformation = document.querySelector('.register-success')

    loading.classList.add('screen-hidden')
    textInformation.classList.remove('screen-hidden')

}

const refreshPage2 = () => {
    window.location.reload()
}

const handleSubmit2 = (event) => {
    event.preventDefault()

    const name = document.querySelector('input[name=nome]').value
    const sobrenome = document.querySelector('input[name=sobrenome]').value
    const telefone = document.querySelector('input[name=telefone]').value
    const endereco = document.querySelector('input[name=endereco]').value
    const cep = document.querySelector('input[name=cep]').value
    const cpf = document.querySelector('input[name=cpf]').value
    const github = document.querySelector('input[name=github]').value
    const linkedin = document.querySelector('input[name=linkedin]').value
    const instagram = document.querySelector('input[name=instagram]').value
    const linkProjeto = document.querySelector('input[name=projeto]').value
    const email = document.querySelector('input[name=email]').value

    fetch("https://api.sheetmonkey.io/form/rV7ZNRukEH2mjdooysQAkj", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, sobrenome, telefone, endereco, cep, cpf, github, linkedin, instagram, linkProjeto, email}) ,
    }).then(() =>{
       
        removeLoadingOnPage2()
        setInterval(refreshPage2(), 3000)
    })

}

document.querySelector('#myForm').addEventListener('submit', handleSubmit2)