async function buscarDetalhes2(){
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
    document.getElementById("detalhes2").innerHTML +=`
    <div class="dts">
        <h3>Financiamento simulado</h3>
        <img class="">     
    </div>
    `
    {
        let divCards = document.getElementsByClassName("btSimular")   
        for(let card of divCards){
            card.addEventListener("click", clicou)    
        }
            
    }
    
}
buscarDetalhes2()

function clicou(){

    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes2.html?produto-id=" + elementoId
}