async function buscar(){
    let resposta = await fetch("msg.txt")
    let convertido = await resposta.text()
    
    let lista = [2,2,2]
   for (let x in lista){
    document.body.innerHTML += `
        <h1>
            ${convertido}
        </h1>
        <p>
            ${lista[x]}
        </p>
    `
   }
    
}

buscar()
