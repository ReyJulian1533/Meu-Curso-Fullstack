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
        <img src="${produtos[indicieProd].imagem[0]}" width="250" height"250">
        <div class="miniaturas" id="miniaturas">

        </div>
    `
}

buscarDetalhes()