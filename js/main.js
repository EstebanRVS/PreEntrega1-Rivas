//Declaro las variables

let altura=(prompt)("Ingresa tu altura (en Mts)")
let peso=(prompt)("Ingresa tu peso (en Kg)")
let iMasaCorp=(peso / (altura*altura));

//Aqui hago la funcion 1.70
function CalcularIMC(peso, altura){
    
    console.log("Tu IMC es: ");
    console.log(iMasaCorp);
    
    return iMasaCorp
}


const IMC= CalcularIMC(peso, altura);

//Aca trato de hacer que, dependiendo el resultado, me diga cierto mensaje

if (IMC > 18 && IMC <= 24){
    console.log("Tienes el peso ideal");

}else if (IMC >25){
    console.log("Tienes sobrepeso");

}else if (IMC <18){
    console.log("Tienes bajo peso");
    
}else{
    console.log("Por favor revisa los valores que ingresaste!");
}