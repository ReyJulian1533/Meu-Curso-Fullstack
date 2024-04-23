async function buscarDetalhes3(){
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
    document.getElementById("carddd").innerHTML += `
    <div class="card7">
        <h3>Informações do proprietario:</h3>
        <h3>${produtos[indicieProd].ctt}</h3>
    </div>
    `
    {
        let divCards = document.getElementsByClassName("btInter")   
        for(let card of divCards){
            card.addEventListener("click", clicou)    
        }
            
    }
    
}
buscarDetalhes3()
