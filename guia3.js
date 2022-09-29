addEventListener("DOMContentLoaded",()=>{
let n = 0
let gallinas= Number(prompt("cuantas gallinas son"))
while (n<gallinas){
    n++
    let peso=Number(prompt("ingrese el peso de la gallina"))
    let altura=Number(prompt("ingrese la altura de la gallina"))
    let nh =Number(prompt("numeros de huevos que pone "))
    let calidad=(peso*altura)/2
    let total=calidad/gallinas
console.log(`la cantidad de gallinas que es :${gallinas} su promedio del kilo es: ${total}`)
}
})