//listar tarefas

const btNovaTarefa = document.getElementById("btNovaTarefa");
const lista = document.getElementById('tarefas')

//Ela espera o resultado de operações demoradas (como requisições de rede) sem travar o restante 
// do código.
async function carregarTask() {
    const response = await fetch(url); //espera a resposta da requisição
    const tasks = await response.json(); //aqui é convertido para json
    
    if(response.ok){
        console.log(tasks);
        mostrarTarefas(tasks);
    }
}

function mostrarTarefas(tasks) {
    lista.innerHTML = '';

    tasks.forEach(task => {
        const linha = document.createElement('tr');

        // Células de dados
        const tituloTd = document.createElement('td');
        tituloTd.textContent = task.titulo;

        const descricaoTd = document.createElement('td');
        descricaoTd.textContent = task.descricao;

        const tipoTd = document.createElement('td');
        tipoTd.textContent = task.tipo;

        const acoesTd = document.createElement('td');

        // Botão Excluir
        const btExcluir = document.createElement('button');
        btExcluir.textContent = 'Excluir';
        btExcluir.className = 'btn btn-danger btn-sm me-2';
        btExcluir.addEventListener('click', () => {
            excluirTarefa(task);
        });

        // Botão Editar
        const btEditar = document.createElement('button');
        btEditar.textContent = 'Editar';
        btEditar.className = 'btn btn-secondary btn-sm';
        btEditar.addEventListener('click', () => {
            titulo.value = task.titulo;
            descricao.value = task.descricao;
            tipo.value = task.tipo;
            idEditando = task.id;
        });

        // Adiciona botões na célula
        acoesTd.appendChild(btExcluir);
        acoesTd.appendChild(btEditar);

        // Adiciona as células na linha
        linha.appendChild(tituloTd);
        linha.appendChild(descricaoTd);
        linha.appendChild(tipoTd);
        linha.appendChild(acoesTd);

        // Adiciona a linha à tabela
        lista.appendChild(linha);
    });
}

function excluirTarefa(task) {
    fetch(`${url}/${task.id}`, {
        method: "DELETE"
    }).then(() => 
    carregarTask()); // Atualiza a lista após excluir
}

function editarTarefa(task) {
    SalvarTarefa(task, task.id).then(() => carregarTask());
}

carregarTask();




