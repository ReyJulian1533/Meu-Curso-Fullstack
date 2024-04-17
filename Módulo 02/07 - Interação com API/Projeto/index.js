async function listagem(){
    let listagem = await fetch("lista.json")
    let concecionaria = await listagem.json()
    let listaDiv = document.getElementById("lista-card")

    for(let x of concecionaria){
        listaDiv.innerHTML +=`
            <div class="card" data-id="${x.id}">
                <h2 class="card" style="border: 3px solid goldenrod">${x.modelo}</h3>
                <img class="card" style="border: 1px solid goldenrod" src="${x.img[0]}" width="150px" height="150px">
                <h3>${x.descricao}</h3>
                <h3>${x.descricao2}</h3>
                <h3>${x.descricao3}</h3>
                <h3>Ano: ${x.ano}</h3>
                <div class="valores01">
                    <span class="valorCom"> R$ ${x.valorComDesconto.toFixed(3).replace(".",",")}</span>
                </div>
                <div class="valores02">
                </div>
            </div>
        `
    }

    let divCards = document.getElementsByClassName("card")

    for(let card of divCards){
        card.addEventListener("click", clicou)    
    }
    
    lista.Json = [
        { "id": 1, "nome": "modelo 1" },
        { "id": 2, "nome": "modelo 2" },
        { "id": 3, "nome": "modelo 3" },
        { "id": 4, "nome": "modelo 4" },
        { "id": 5, "nome": "modelo 5" },
        { "id": 6, "nome": "modelo 6" },
        { "id": 7, "nome": "modelo 7" },
        { "id": 8, "nome": "modelo 8" }
      ];

    function renderizarLista(itens) {
        let lista = document.getElementById("listaItens");
        lista.innerHTML = "";

        itens.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.nome;
            lista.appendChild(li);
          });
        }
        
        function filtrarItens(pesquisa) {
          const itensFiltrados = listaJSON.filter(item =>
            item.nome.toLowerCase().includes(pesquisa.toLowerCase())
          );
          renderizarLista(itensFiltrados);
        }
        
        renderizarLista(listaJSON);
        
        document.getElementById("inputPesquisa").addEventListener("input", function() {
          filtrarItens(this.value);
        });
    }
listagem()

function clicou(){

    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes.html?produto-id=" + elementoId
}

