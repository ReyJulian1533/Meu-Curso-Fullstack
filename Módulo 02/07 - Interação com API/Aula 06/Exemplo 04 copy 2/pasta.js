async function lista(){
    let nome = await fetch("arquivos.json")
    let item = await nome.json()
    
    let parametros = new URLSearchParams(Window.location.search)
    let parametroID = parametros.get("produto-id")

    let indicieProd
    for(let x in item){
        if(item[x].id == parametroID){
            indicieProd = x
        }
    }

    document.body.innerHTML = `
        <h3>${item[indicieProd].MarcaModelo}</h3>
        <img src="
    `
}