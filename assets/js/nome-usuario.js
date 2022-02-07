const inputUser = document.querySelector('#inputUser')

function btnContinuar(){
    if(inputUser.value === ''){
        alert('Preencha os dados corretamente')
    }else{
        localStorage.setItem('nome', inputUser.value);
    }
}