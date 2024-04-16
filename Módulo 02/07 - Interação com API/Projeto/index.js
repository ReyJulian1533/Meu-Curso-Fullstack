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
    
}
listagem()

function clicou(){

    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes.html?produto-id=" + elementoId
}