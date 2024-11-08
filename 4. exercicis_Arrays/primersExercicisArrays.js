                                                //Exercicis de taules
                                        //Introducció a les taules
                                  
//     //21.1.- Fes un programa que faci el següent:
// // ● Defineix una variable de tipus taula, buida.
// let arr2=[];

// // ● Afegeixi el valor “Hola” a la posició 0.
// arr2[0]="Hola";

// // ● Afegeixi el valor “Adeu” a la posició 1.
// arr2[1]="Adeu";

// // ● Escrigui a la consola el contingut de la taula.
// console.log(arr2);

// // 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log()) per a fer el següent:
// arr2[2]="Nom";
// console.log(arr2);
// arr2[1]=",";
// console.log(arr2);

// //21.3.- Fes un programa que faci el següent:
// let taula=[23,45,98,73];
// let suma=taula[0]+taula[2];
// taula[6]=suma;
// console.log(taula);

// //21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola.
// let num=parseInt(prompt("Diguem un num"));
// taula=[num*2,num*3];
// console.log(taula);

// //21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts.
// let num1=parseInt(prompt("Diguem primer num"));
// let num2=parseInt(prompt("Diguem segon num"));
// let array=[num1+num2,num1-num2,num1*num2,num1/num2];
// console.log(array);

// //21.6.- Donada aquesta taula: let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]; Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició de la taula.
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// console.log(taula[0], taula[taula.length-1]);

// //21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la taula, un a un.
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// console.log(taula[0]);
// console.log(taula[1]);
// console.log(taula[2]);
// console.log(taula[3]);
// console.log(taula[4]);
// console.log(taula[5]);
// console.log(taula[6]);
// console.log(taula[7]);
// console.log(taula[8]);
// console.log(taula[9]);
// console.log(taula[10]);
// console.log(taula[11]);
// console.log(taula[12]);
// console.log(taula[13]);
// console.log(taula[14]);
// console.log(taula[15]);

// //21.8.- Fes un programa que escrigui a la consola la suma tots els valors emmagatzemats a la taula.
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let suma=0;
// for (let i=0; i<taula.length;i++){
//         num=taula[i];
//         suma=suma+num;
// }     
// console.log(suma);

// //21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let taula2=[];
// let suma=25;
// for(let i=0; i<taula.length; i++){
//         taula2=taula2+(taula[i]+suma)+",";
// }
// console.log(taula2)

                //OJO FALTA QUE SURTI COM UNA TAULA(ARRAY) EL EX:21.9.

//21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel nombre de valors).