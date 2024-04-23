var data;

async function listagem() {
    let listagem = await fetch("lista.json")
    data = await listagem.json()
    showResults(data);
}

async function search() {
    var query = searchInput.value.toLowerCase();
    var results = data.filter(function(item) {
        return item.modelo.toLowerCase().includes(query) || item.descricao.toLowerCase().includes(query);
    });
    showResults(results);
}

function showResults(results) {
    var listaDiv = document.getElementById("lista-card");
    listaDiv.innerHTML = ''; // Limpa os resultados anteriores


    for(let item of results){
        listaDiv.innerHTML += `
            <div class="card" data-id="${item.id}">
                <h2 class="card" style="border: 3px solid goldenrod">${item.modelo}</h3>
                <img class="card" style="border: 1px solid goldenrod" src="${item.img[0]}" width="150px" height="150px">
                <h3>${item.descricao}</h3>
                <h3>${item.descricao2}</h3>
                <h3>${item.descricao3}</h3>
                <h3>Ano: ${item.ano}</h3>
                <div class="valores01">
                    <span class="valorCom"> R$ ${item.valorComDesconto.toFixed(3).replace(".",",")}</span>
                </div>
            </div>
        `
    }

    let divsCards = document.getElementsByClassName("card")
    for(let card of divsCards){
        card.addEventListener("click", clicou)
    }

    
}

function clicou() {
    let idElemento = this.getAttribute("data-id")
    window.location.href = "detalhes.html?produto-id=" + idElemento

}

listagem();

var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', search);
