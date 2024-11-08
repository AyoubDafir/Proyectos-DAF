// //Exercici 3.1 Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció. 
// function parellSenar(nombre){
//     let text="";
//     if (nombre % 2 === 0){
//         text="El teu nombre es parell";
//     }
//     else{
//         text="El teu nombre es senar";
//     }
//     return
// }
            //OJO NO ESTÀ ACABADO


// //Exercici 3.2 Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és. 
// function esAnyDeTraspas(any){
//     if((any % 4 ===0 && any % 100 !==0)|| any % 400 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let numeroAny=parseInt(prompt("Introdueix un any per comparar si és de traspàs:"));

// if (esAnyDeTraspas(numeroAny)){
//     console.log(numeroAny + " és un any de traspàs")
// }
// else{
//     console.log(numeroAny +" no és un any de traspàs")
// }

//Exercici 3.3 Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.
let num=0;
function formula(N){
    for (let n=1;n<=N; n++);
    num=num+(1/Math.pow(n,2));
    return num;   
}
let N=parseInt(prompt("Diguem N"));
if (N > 0) {
    console.log(`La suma de la sèrie per N = ${N} és: ${formula(N)}`);
} else {
    console.log("Introdueix un valor positiu per N.");
}

// ACABAR