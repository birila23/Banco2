const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const tipo = document.getElementById("tipo");
const btSalvar = document.getElementById("btSalvar");

let idEditando = null;

const url = "http://localhost:3000/tasks";
//se o id editando for igual a null, é uma nova tarefa sendo criada, se for voltar um id é patch
//Se id existe (ou seja, idEditando foi preenchido), então usa "PATCH" e envia para o endpoint com /id
function SalvarTarefa(task, id){
    const metodo = id ? "PATCH" : "POST";
    const endpoint  = id ? `${url}/${id}` : url;
    return fetch(endpoint, {
        method: metodo, 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
}

btSalvar.addEventListener("click", () =>{
    const tasks = {
        titulo: titulo.value,
        descricao: descricao.value,
        tipo: tipo.value
    }

    SalvarTarefa(tasks, idEditando).then(() =>{
    titulo.value = "";
    descricao.value = "";
    tipo.value = "";
    idEditando= null;
    carregarTask();
    });
})






