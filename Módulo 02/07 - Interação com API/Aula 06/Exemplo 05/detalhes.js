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
        <h3>${produtos[indicieProd].produto}</h3>
        <img src="${produtos[indicieProd].imagem[0]}" id="frame" width="250" height"250" style="border: 1px solid #000">
        <div class="miniaturas" id="miniaturas">

        </div>
    `

    let divMiniaturas = document.getElementById("miniaturas")
    for(let x of produtos[indicieProd].imagem){
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