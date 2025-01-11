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
// function notaFinal() {
//     let n1 = parseFloat(prompt("Escriu Nota final d'avaluació continuada (entre 0 i 10):"));
//     let n2 = parseFloat(prompt("Escriu Nota de pràctiques (entre 0 i 10):"));
//     let n3 = parseFloat(prompt("Escriu Nota d'examen (entre 0 i 10):"));

//     let Nota;
//     if (n1 >= 5) {
//         Nota = 0.2 * n1 + 0.4 * n2 + 0.4 * n3;
//     } else {
//         Nota = 0.4 * n2 + 0.6 * n3;
//     }

//     let notaLletra;
//     if (Nota < 5) {
//         notaLletra = "D";
//     } else if (Nota >= 5 && Nota < 6.5) {
//         notaLletra = "C";
//     } else if (Nota >= 6.5 && Nota < 8) {
//         notaLletra = "B";
//     } else if (Nota >= 8 && Nota < 10) {
//         notaLletra = "A";
//     } else if (Nota === 10) {
//         notaLletra = "H";
//     }

//     return "La nota final és " + Nota + " una "  + notaLletra ;
// }

// // Mostrar el resultat
// document.write(notaFinal());

// //Exercici 3.5
// function concurs(relat) {
//     let paraulesDe5Lletres = 0;
//     let lletres = 0; // número de lletres de la paraula actual
//     let i = 0; // posició en la cadena de caràcters
//     // Per saber quan he d'acabar, tinc en compte que la cadena acaba en punt.
//     while (relat[i] !== ".") {
//       if (relat[i] === " ") {
//         // si trobem un espai, estem canviant de paraula
//         if (lletres === 5) {
//           // La paraula tenia 5 lletres
//           paraulesDe5Lletres++;
//         }
//         lletres = 0; // Com que estem canviant de paraula, tornem el comptador de lletres a 0
//       } else if (relat[i] !== ",") {
//         // si no és un espai, ni una coma, comptem com una lletra més
//         lletres++;
//       }
//       i++;
//     }
//     if (lletres === 5) {
//       // per comptabilitzar també la paraula final acabada en .
//       paraulesDe5Lletres++;
//     }
//     return paraulesDe5Lletres;
//   }

//19.1.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al quadrat.
// let nombre=parseInt(prompt("Diguem numeró:"));
// let elevat;
// elevat=Number(elevat);
// function quadrat(nombre){
//   elevat=nombre**2;
//   return elevat;
// }
// console.log(quadrat(nombre));

//19.11
//algorisme principal
// let arr="The cat is in the roof.";
// let codi=codificaCadena(arr);//crida ala funció
// console.log(codi.toString());

// //funció que codifica una cadena
// function codificaCadena(arr) {
//   let arrAux=[];
//   let j=arr.length-1;
//   //creo una cadena nova amb les paraules en l’ordre invers
//   for (let i=0;i<arr.length;i++){
//     if (arr[i]=="a"){
//       arrAux[j]=1;
//     }else{
//       if (arr[i]=="e"){
//             arrAux[j]=2;
//       }else{
//         if (arr[i]=="i"){
//           arrAux[j]=3;
//         }else{
//           if (arr[i]=="o"){
//             arrAux[j]=4;
//           }else{
//             if (arr[i]=="u"){
//             arrAux[j]=5;
//             }else{
//               arrAux[j]=arr[i];
//             }
//           }
//         }
//       }
//     }
//     j=j-1;
//   }
//   return arrAux;
// }                                 

            //DOM:
// function canviText() {
//   document.getElementById("resultats").innerHTML = "<b> Aquest és el nou text. </b>";
//   }


//Examen 2023:
// Accedir als elements del formulari
let nombre1 = document.getElementById("n1"); // Primer nombre
let nombre2 = document.getElementById("n2"); // Segon nombre
let botoSuma = document.getElementsByName("suma")[0]; // Botó de suma
let botoResta = document.getElementsByName("resta")[0]; // Botó de resta
let resultat = document.getElementById("res"); // Span per mostrar el resultat

// Afegim l'esdeveniment al botó de suma
f.botoSuma.addEventListener("click", function () {
    resultat.textContent = parseInt(nombre1.value) + parseInt(nombre2.value);
});

// Afegim l'esdeveniment al botó de resta
f.botoResta.addEventListener("click", function () {
    resultat.textContent = parseInt(nombre1.value) - parseInt(nombre2.value);
});



//Exercici 4:

// Accedim a la llista
let llista = document.getElementById("llista");

// 1. Afegir un nou element al final de la llista
let nouElementFinal = document.createElement("li"); // Creem un nou <li>
nouElementFinal.textContent = "Sis"; // Assignem el text "Sis"
llista.appendChild(nouElementFinal); // Afegim l'element al final de la llista

// 2. Afegir un nou element entre Dos i Quatre
let nouElementTres = document.createElement("li"); // Creem un nou <li>
nouElementTres.textContent = "Tres"; // Assignem el text "Tres"

// Localitzem l'element Quatre
let elementQuatre = llista.children[2]; // El tercer element és Quatre (índex 2)

// Inserim l'element Tres abans de Quatre
llista.insertBefore(nouElementTres, elementQuatre); // Afegim Tres abans de Quatre
