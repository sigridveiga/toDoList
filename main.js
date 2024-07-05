const taskForm = document.getElementById('todoForm');
const listaTarefas = document.getElementById('listaTarefas');

taskForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const nomeTarefa = document.getElementById('nomeTarefa').value;
    const descricaoTarefa = document.getElementById('descricaoTarefa').value;
    const novaTarefa = { nome: nomeTarefa, descricao: descricaoTarefa };
    salvarTarefa(novaTarefa);
    taskForm.reset();
});

const salvarTarefa = (tarefa) => {
    const tarefa = JSON.parse(localStorage.getItem('tarefa')) ||[];
    tarefa.push(tarefa);
    localStorage.setItem('tarefa', JSON.stringify(tarefa));
    carregarTarefas();
};
const carregarTarefas = () => {
    const carregarTarefas = JSON.parse(localStorage.getItem('tarefa')) || [];
    listaTarefas.innerHTML = '';
    tarefa.forEach((tarefa, index) => {
        const cartao = document.createElement('div');
        cartao.className = 'col-md-4 md-4';
        cartao.innerHTML = '
         <div class="card text-bg-dark mb-3 task-cark">
            <div class="card-body">
                <h5 class="card-title">${tarefa.nome}</h5>
                <p class="card-text">${tarefa.descricao}</p>
            <button class="btn btn-warnig" onclick="editarTarefa"(${index})">Editar</button>"
            <button class="btn btn-danger" onlick"excluirTarefa(${index})"Excluir</button>"
            </div>
            </div>       
        ';
    });
};