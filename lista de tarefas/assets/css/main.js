const inputTarefa= document.querySelector('.input-tarefa');
const btnTarefa= document.querySelector('.btn-tarefa');
const tarefas= document.querySelector('.tarefas');

function criaLi(){
    const li= document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e){

if (e.keycode===13){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
}

});