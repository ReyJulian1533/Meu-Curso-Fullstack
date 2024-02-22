async function concessionaria(){
    let resultado = await fetch("carros.json")
    let carros = await resultado.json()

    
   //alert("A marca é " + carros.marca + " o modelo é " + carros.modelo + " o ano é " + carros.ano + " e a cor é " + carros.cor + ".")
   //alert(carros[1].modelo)

  
        document.body.innerHTML +=`
        <p> A marca do carro é ${carros[1].marca}</p>
        <p> O modelo do carro é ${carros[1].modelo}</p>
        <p> O ano do carro é ${carros[1].ano}</p>
        <p> A cor do carro é ${carros[1].cor}</p>`
   
}
concessionaria()

    //A marca é x, o modelo é x, o ano é x e a cor é x
