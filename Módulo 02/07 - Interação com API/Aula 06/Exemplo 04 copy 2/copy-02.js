async function Loja(){
    let patio = await fetch("arquivos.json")
    let mostruario = await patio.json()
    let listaDiv = document.getElementById("lista-div")

    for(let x of mostruario){
        listaDiv.innerHTML +=`
            <div class="card" data-id="${x.id}">
                <h3>${x.MarcaModelo}</h3>
                <img src="${x.img}" width="250px" height"250px">
                <p>${x.Ano}</p>
                <p>R$ ${x.ApenasPor.toFixed(3)}</p>
                <p>Parcelado ${x.Ou.toFixed(3)}</p>
            </div>
        `
    }

    let divCards = document.getElementsByClassName("card")
    for(let card of divCards){
        card.addEventListener("click", clicou)
    }
}
Loja()

function clicou(){
    let elementoId = this.getAttribute("data-id")
    window.location.href = "pasta.html?MarcaModelo-id" + elementoId
}