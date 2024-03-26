async function lista(){
    let nome = await fetch("arquivos.json")
    let item = await nome.json()
    
}