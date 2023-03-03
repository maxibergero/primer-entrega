
let tarjeta = prompt('elige una tarjeta de credito: naranja,mastercard,cordobesa')
while (tarjeta !== 'naranja' & tarjeta !== 'mastercard' & tarjeta !== 'cordobesa'){
    tarjeta = prompt('elige una tarjeta nuevamente: naranja,mastercard,cordobesa')
}

let cuotas = parseInt(prompt('elige cantidad de cuotas:3,6,12'))
while (cuotas !==3 & cuotas !==6 & cuotas !==12 ){
    cuotas = parseInt(prompt('elige nuevamente plan de cuotas:3,6,12'))
}

let porcentaje = 18 || 24 || 32 

let valor =  parseInt(prompt('escribe el valor del producto'))


/*condicional segun cantida de cuotas*/
if (cuotas === 3){
 cuotas = costo(valor,18)

}else if (cuotas === 6){
    cuotas = costo(valor,24)
 
}else if (cuotas === 12){
    cuotas = costo(valor,32)
  
}

/*funcion porcentaje*/
function costo(valor,porcentaje){
   return valor * porcentaje / 100 + valor
}

let total = costo(valor,porcentaje)
alert ('el total es igual: '+total)




   









 
