async function pizzaria(){
    let cardapio = await fetch("pizza.json")
    let Sabores = await cardapio.json()

    for(let x in Sabores){

        document.body.innerHTML +=`
        <p> Sabor: ${Sabores[x].pizza}</p>
        <p> Fornecedor: ${loja[x].pizza}</p>
        <p> Tamanho: ${tamanho[x].pizza}</p>
        <p> Valor: ${valor[x].pizza}</p>
        `

    }
}
pizzaria()