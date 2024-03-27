async function produtos(){
    let mostruario = await fetch("lista.json")
    let moveis = await mostruario.json()
    let listaDiv = document.getElementById("lista-card")
    
    for(let movel of moveis){ 
        listaDiv.innerHTML +=`
            <div class="card" data-id="${movel.id}">
                <h3>${movel.produto}</h3>
                <img src="${movel.imagem[0]}" width="200px" height="200px">
                <p>${movel.modelo}</p>
                <p>R$ ${movel.preco. toFixed(2)}</p>
            </div>
        ` 
    }

    let divCards = document.getElementsByClassName("card")
   
    for(let card of divCards){
        card.addEventListener("click", clicou)
    }
}
produtos()

function clicou(){

    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes.html?produto-id=" + elementoId
}
