const textoHorario = document.querySelector('#texto-horario')
const iconHorario = document.querySelector('#icon-horario')
const nomeUsuario = document.querySelector('#nome-usuario')

const modalDialog = document.querySelector('#modal-dialog')
const btnFechar = document.querySelector('#btn-fechar')

//Horario || Dashboard
let data = new Date()
let hora = data.getHours()
if(hora >= 0 && hora <= 12) {
    textoHorario.innerHTML += 'Bom dia,'
}else if(hora >= 12 && hora <= 18){
    textoHorario.innerHTML = 'Boa tarde,'
    iconHorario.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png'
}else{
    textoHorario.innerHTML = 'Boa noite,'
    iconHorario.src = 'https://cdn-icons-png.flaticon.com/512/6735/6735121.png'
}

nomeUsuario.innerText = localStorage.nome

//Modal
function clickModal(){
    const modal = document.querySelector('body')
    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'modal-dialog' || e.target.className == 'btn-fechar'){
            modalDialog.classList.remove('mostrar')
        }
    })

    modalDialog.classList.add('mostrar')
}

function btnCadastrarDespesa(){
    document.getElementById('title').innerHTML = "Cadastrar Nova Despesa"
    document.getElementById('btn-inferior').innerHTML = 'Salvar Despesa'
    clickModal()
}

function btnFiltro(){
    document.getElementById('title').innerHTML = "Filtro de despesas"
    document.getElementById('btn-inferior').innerHTML = 'Procurar despesas'
    clickModal()
}

//Local localStorage
function btnComecar(){
    if(localStorage.getItem('nome') === '' || localStorage.getItem('nome') === null){
        location.url = 'https://viniciusoliver-stack.github.io/Despesas/assets/pages/nome-usuario.html' 
    }else{
        location.url = 'https://viniciusoliver-stack.github.io/Despesas/assets/pages/despesas.html'
    }
}