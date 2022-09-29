addEventListener("DOMContentLoaded",()=>{
let a = 0
while ( a < 5){
    let nombre = prompt("Ingrese el nombre y apellido: ")
    let edad = Number(prompt("Ingrese su edad: "))
    let nota = Number(prompt("Ingrese su nota: "))
    console.log(nombre)
    console.log(edad)
    console.log(nota)

    let p= prompt("coloca p para para o cualquier lettra para continuar")
    if (p=='p'){
        break}

}
})
// '''
// Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de
// computación.
// '''
// a = 0
// while a < 5:
//     nombre = input("Ingrese el nombre y apellido: ")
//     edad = int(input("Ingrese su edad: "))
//     nota = float(input("Ingrese su nota: "))
//     a+=1