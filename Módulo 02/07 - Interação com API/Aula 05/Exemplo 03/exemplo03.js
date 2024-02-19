async function resolvrer(){
    let busca1 = await fetch("tarefas.json")
    let tarefas = await busca1.json()


    for(let x in tarefas){
         document.body.innerHTML += `<h1> ${tarefas[x]} </h1>`
    }
   

}

resolvrer()