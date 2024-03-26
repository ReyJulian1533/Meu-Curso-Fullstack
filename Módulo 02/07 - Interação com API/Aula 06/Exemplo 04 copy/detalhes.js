async function buscarDetalhes(){
    //Consumo do JSON
    let busca = await fetch("lista.json")
    let produtos = await busca.json()

    //Criou um objeto URLSearchParams e passou
    //a coleta dos parametros da URL nele.
    let parametros = new URLSearchParams(window.location.search)
    // Obteve do parametro "produto-id", o seu valor
    let parametroID = parametros.get("produto-id")

    let indicieProd
    for(let x in produtos){
        if(produtos[x].id == parametroID){
            indicieProd = x
        }
    }

    document.body.innerHTML = `
        <h3>${produtos[indicieProd].produto}</h3>
        <img src="
    `
}

buscarDetalhes()