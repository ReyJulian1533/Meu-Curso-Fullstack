// Seu JSON
var data

async function listagem(){
    let listagem = await fetch("lista.json")
    data = await listagem.json()
    console.log(data)

    showResults(data);
}

listagem()
  
var searchInput = document.getElementById('searchInput');
var resultsList = document.getElementById('results');

// Função para exibir os resultados da pesquisa
function showResults(results) {
    resultsList.innerHTML = ''; // Limpa os resultados anteriores

    results.forEach(function(item) {
        var li = document.createElement('li');
        li.classList.add('result-item');
        li.innerHTML = '<strong>' + item.modelo + '</strong>: ' + item.descricao;
        resultsList.appendChild(li);
    });
}

// Função para realizar a pesquisa
function search() {
    var query = searchInput.value.toLowerCase();
    var results = data.filter(function(item) {
        return item.modelo.toLowerCase().includes(query) || item.descricao.toLowerCase().includes(query);
    });
    showResults(results);
}

// Evento de entrada na barra de pesquisa
searchInput.addEventListener('input', search);0