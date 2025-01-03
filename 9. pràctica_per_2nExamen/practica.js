                                            // PRÀCTICA
        //Exercicis Funcions

// //exercici 3.1:
// let n1=parseInt(prompt("Escriu n1:"));
// function visual(n1){
//     if (n1 %2 === 0){
//         return ("El número es parell")
//     }
//     else{
//         return ("El número es senar")
//     }  
// }
// document.write(visual(n1));

//Exercici 3.4:
// Exercici 3.4:
function notaFinal() {
    let n1 = parseFloat(prompt("Escriu Nota final d'avaluació continuada (entre 0 i 10):"));
    let n2 = parseFloat(prompt("Escriu Nota de pràctiques (entre 0 i 10):"));
    let n3 = parseFloat(prompt("Escriu Nota d'examen (entre 0 i 10):"));

    let Nota;
    if (n1 >= 5) {
        Nota = 0.2 * n1 + 0.4 * n2 + 0.4 * n3;
    } else {
        Nota = 0.4 * n2 + 0.6 * n3;
    }

    let notaLletra;
    if (Nota < 5) {
        notaLletra = "D";
    } else if (Nota >= 5 && Nota < 6.5) {
        notaLletra = "C";
    } else if (Nota >= 6.5 && Nota < 8) {
        notaLletra = "B";
    } else if (Nota >= 8 && Nota < 10) {
        notaLletra = "A";
    } else if (Nota === 10) {
        notaLletra = "H";
    }

    return "La nota final és " + Nota + " una "  + notaLletra ;
}

// Mostrar el resultat
document.write(notaFinal());
