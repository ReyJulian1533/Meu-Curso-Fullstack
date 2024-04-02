async function listagem(){
    let listagem = await fetch("lista.json")
    let concecionaria = await listagem.json()
    let listaDiv = document.getElementById("lista-card")

    for(let x of concecionaria){
        listaDiv.innerHTML +=`
            <div class="" data-id="${x.id}">
                <h3>${x.modelo}</h3>
                <img src="${x.img[0]}" width="200px" height="200px">
                <p>${x.descricao}</p>
                <p>${x.ano}</p>
                <p>R$ ${x.valorComDesconto}</p>
                <p>R$ ${x.valorSemDesconto}</p>
            </div>
        `
    }

    let divCards = document.getElementsByClassName("lista-card")

    for(let card of divCards){
        card.addEventListener("click", clicou)      
    }
}
listagem()

    function clicou(){

        let elementoId = this.getAttribute("data-id")
        window.location.href = "detalhes.html?produto id=" + elementoId
    }