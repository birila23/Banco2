const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const tipo = document.getElementById("tipo");
const btSalvar = document.getElementById("btSalvar");

const url = "http://localhost:3000/tasks";

function SalvarTarefa(tasks){
    fetch(url, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tasks)
    })
}

btSalvar.addEventListener("click", () =>{
    const tasks = {
        titulo: titulo.value,
        descricao: descricao.value,
        tipo: tipo.value
    }
    if (tasks === ""){
        alert("preencha todos os campos!");
        return;
    }

    SalvarTarefa(tasks);

    titulo.value = "";
    descricao.value = "";
    tipo.value = "";
})