// //Exercicis de programació
//     //Estructures alternatives i iteratives
//     //Condicional simple: if
// //13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero.
// let number= prompt("Dime un numero");
// let text;

// if (number < 0) {
//      text="El teu numeró es negatiu";
//      document.write(text);
// } else {
//     document.write("numero ha de ser negatiu");
// }

// //13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el  número llegit és parell” si el número es parell. 
// let number=prompt("Diguem un número");
// let text;
// if (number % 2 == 0) {
//     text="El numero es parell";
//     document.write(text);
// }

//13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit  és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas. 
// let number=prompt("Diguem un número");
// let text
// if(number %2 == 0) {
// text=("El teu número es parell");
// document.write(text);    
// }
// if(number %2 != 0){
// text=("El número es senar");
// document.write(text);
// }

//13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola  el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més  gran que el segon i l’altre per comprovar si el segon número és més gran que el primer. 
// let number1=prompt("Diguem un número");
// let number2=prompt("Diguem el segon número");
// let text;
// if (number1 >number2){
//     console.log(number1);
// }
// if (number1<number2){
//     console.log(number2);
// }

// //13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola  el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels  números és el més gran.  
// let number1=prompt("Escriu num1");
// let number2=prompt("Escriu num2");
// let number3=prompt("Escriu num3");
// let text;
// if (number1>number2 && number1>number3){
//     console.log(number1);
// }
// if (number2>number1 && number2>number3){
//     console.log(number2);
// }
// if (number3>number1 && number3>number2){
//     console.log(number3);
// }

//13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes,  entre 1 i 12, escrigui per pantalla el nom del mes que correspon.  
// let numbermes=prompt("Diguem el número del mes");
// if (numbermes==1){
//     document.write("Gener");
// }
// if (numbermes==2){
//     document.write("Febrer");
// }
// if (numbermes==3){
//     document.write("Març");
// }
// if (numbermes==4){
//     document.write("Abril");
// }
// if (numbermes==5){
//     document.write("Maig");
// }
// if (numbermes==6){
//     document.write("Juny");
// }
// if (numbermes==7){
//     document.write("Juliol");
// }
// if (numbermes==8){
//     document.write("Agost");
// }
// if (numbermes==9){
//     document.write("Setiembre");
// }
// if (numbermes==10){
//     document.write("Octubre");
// }
// if (numbermes==11){
//     document.write("Noviembre");
// }
// if (numbermes==12){
//     document.write("Diciembre");
// }

    //Condicional doble: if - else 

//14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el  número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el  número llegit és positiu” en cas contrari.  
let number= prompt("Dime un numero");
let text;
if (number < 0) {
text="El teu numeró es negatiu";
console.log(text);
} else {
    console.log("El teu numeró es positiu");
}
