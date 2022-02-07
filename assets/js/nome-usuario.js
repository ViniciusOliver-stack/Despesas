const inputUSer = document.querySelector('#inputUser')

function btnContinuar(){
    localStorage.setItem('nome', inputUSer.value);
}