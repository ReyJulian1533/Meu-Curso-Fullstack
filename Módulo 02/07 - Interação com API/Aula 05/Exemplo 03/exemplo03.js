async function resolvrer(){
    let busca1 = await fetch("tarefas.json")
    let tarefas = await busca1.json()


    for(let x of tarefas){
         document.body.innerHTML += `<h1> ${x} </h1>`
    }
   
}

resolvrer()