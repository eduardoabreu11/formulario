

function chega(){
    let inputNome = document.getElementById('nome')
    let inputEmail = document.getElementById('email')
    let inputTelefone = document.getElementById('numero')
    let mensagem = document.getElementById('textarea')
    let smallNome = document.querySelectorAll('#small')[0]
    let smallEmail = document.querySelectorAll('#small')[1]
    let smallTelefone = document.querySelectorAll('#small')[2]
    let smallmensagem = document.querySelectorAll('#small')[3]
    

    if (inputNome.value === ""){
        inputNome.classList.add('bordaErrada')
        smallNome.classList.add('smallError')
    }else{
        smallNome.classList.remove('smallError')
        inputNome.classList.remove('bordaErrada')
        inputNome.classList.add('bordaCerta')
    }

    if (inputEmail.value === ""){
        inputEmail.classList.add('bordaErrada')
        smallEmail.classList.add('smallError')
    }else{
        smallEmail.classList.remove('smallError')
        inputEmail.classList.remove('bordaErrada')
        inputEmail.classList.add('bordaCerta')
    }

    if (inputTelefone.value === ""){
        inputTelefone.classList.add('bordaErrada')
        smallTelefone.classList.add('smallError')
    }else{
        smallTelefone.classList.remove('smallError')
        inputTelefone.classList.remove('bordaErrada')
        inputTelefone.classList.add('bordaCerta')
    }

    if (mensagem.value === ""){
        mensagem.classList.add('bordaErrada')
        smallmensagem.classList.add('smallError')
    }else{
        smallmensagem.classList.remove('smallError')
        mensagem.classList.remove('bordaErrada')
        mensagem.classList.add('bordaCerta')
    }

    
}