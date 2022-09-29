addEventListener("DOMContentLoaded",()=>{
let cantPro=0
while(cantPro<10){
    let n1=Number(prompt("ingrese un numero "))
    let n2= Number(prompt("ingrese otro numero"))
    let suma = n1 + n2
    let multiplicacion = n1 * n2
    let resta = n1 - n2
    let division= n1/n2
    console.log(`${n1} + ${n2}  = ${suma}`)
    console.log(`${n1} * ${n2}  = ${multiplicacion}`)
    console.log(`${n1} - ${n2}  = ${resta}`)
    console.log(`${n1} / ${n2}  = ${division}`)
    let p= prompt("coloca p para para o cualquier lettra para continuar")
    if (p=='p'){
        break
    }

}
})
