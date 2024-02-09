async function buscar(){
    let procura = await fetch("API/tarefas.json")
    let lista = await procura.json()
    console.log(lista)
}

buscar()