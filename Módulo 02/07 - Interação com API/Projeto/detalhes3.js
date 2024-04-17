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
    document.getElementById("detalhes3").innerHTML +=`
    <div class="dts">
        <h3>Dados pessoais</h3>
        <img class="">     
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
