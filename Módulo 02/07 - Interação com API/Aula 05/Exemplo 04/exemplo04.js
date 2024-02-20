async function resolvrer(){
    let busca1 = await fetch("tarefas.json")
    let tarefas = await busca1.json()

    let busca2 = await fetch("cores.json")
    let cores  = await busca1.json()

    for(let x of tarefas){
        let corAleatoria = par(Math.random() * 7)
         document.body.innerHTML += `
            <h1 style="color: ${cores[corAleatoria]}"> ${x} </h1>
         `
    }
   
}

resolvrer()