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
    <div class="card5">
        <h3>${produtos[indicieProd].modelo}</h3>
        <img class="card1" src="${produtos[indicieProd].img[0]}" id="frame" width="auto" height="250" style="border: 2px solid goldenrod">
        <div class="card1" class="miniaturas" id="miniaturas"></div>
    </div>
    `
    document.getElementById("detalhes").innerHTML += `
    <div class="card6">
        <h3>INFORMAÇÕES GERAIS:</h3>
        <h3>${produtos[indicieProd].infoCar}</h3>
    </div>
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

    {
    let divCards02 = document.getElementsByClassName("btSimular")   
    for(let card of divCards02){
        card.addEventListener("click", clicou)    
    }
            
    }
    {
    let divCards3 = document.getElementsByClassName("btInter")   
    for(let card of divCards3){
        card.addEventListener("click", clicou2)    
    }
                
    }

function deslize(){
    document.getElementById("frame").src = this.src
}

}
buscarDetalhes()

function clicou(){

    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes2.html?produto-id=" + elementoId
}

function clicou2(){

    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes3.html?produto-id=" + elementoId
}
