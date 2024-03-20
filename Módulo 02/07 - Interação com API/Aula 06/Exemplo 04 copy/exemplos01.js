async function produtos(){
    let mostruario = await fetch("lista.json")
    let moveis = await mostruario.json()
    let listaDiv = document.getElementById("lista-card")
    
    for(let movel of moveis){ 
        listaDiv.innerHTML +=`
            <div class="card" data-id="${movel.id}">
                <h3>${movel.produto}</h3>
                <img src="${movel.imagem}" width="250px" height="250px">
                <p>${movel.modelo}</p>
                <p>R$ ${movel.preco}</p>
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
    alert(elementoId)
}