async function buscarDetalhes(){
    let busca = await fetch("lista.json")
    let produtos = await busca.json()

    let parametros = new URLSearchParams(window.location.search)
    let parametroID = parametros.get("produto-id")

    let indicieProd
    for(let x in produtos){
        if(produtos[x].id == parametroID){
            indicieProd = x
        }
    }

    document.getElementById("detalhes").innerHTML += `
        <h3 class="card1" style="border: 4px solid goldenrod">${produtos[indicieProd].modelo}</h3>
        <img class="card1" src="${produtos[indicieProd].img[0]}" id="frame" width="250" height="250" style="border: 2px solid goldenrod">
        <div class="card1" class="miniaturas" id="miniaturas"></div>

    `

    document.getElementById("detalhes2").innerHTML +=`
        <span>Lider em vendas</span>
    `

    let divMiniaturas = document.getElementById("miniaturas")
    for(let x of produtos[indicieProd].img){
        divMiniaturas.innerHTML +=`
            <img src="${x}" class="mini" width="80" style="border: 1px solid #000">
        `
    }

    let minizinhas = document.getElementsByClassName("mini")
    for(let x of minizinhas){
        x.addEventListener("mouseover", deslize)
    }
}

function deslize(){
    document.getElementById("frame").src = this.src
}

buscarDetalhes()