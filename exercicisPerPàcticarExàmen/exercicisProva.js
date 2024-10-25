// // Exercicis importants
// //Quins valors tindran les variables a, b i c un cop s'executi aquest codi?

// let a = 5;
// a++;
// let b = a;
// a--;
// let c = a;
// a--;

// //Quins valors es guardaran a les variables d1, d2 i d3 després d'executar aquest codi?

// let a = "Hola";
// let b = "hola";
// let c = "Adéu";
// let d1 = a == b;
// let d2 = a < b;
// let d3 = a < c;
// console.log(d1,d2,d3)

// //Quins valors es guardaran a les variables e1, e2, e3 i e4 després d'executar aquest programa?

// let a = 5;
// let b = 4;
// let e1 = a > b || a < b;
// let e2 = a > b && a < b;
// let e3 = e1 || e2;
// let e4 = a <= b + 1 && b - 1 * 5 < 0;
// console.log(e1,e2,e3,e4)

// //Exercici sense if
// let num=prompt("diguem la teva edat")
// let res = (num>=18) ? "Ets major d'edat" : "No ets major d'edat";
// console.log(res)

// //otro mas
// let num=prompt("diguem numero")
// let res = (num<0)? -1 : 1;
// console.log(res)

// //otro
// let res = (num1>num2)? num1 : num2;

// // otro
// let res = (text1==text2)? true : false ;

    // //Problema 14.9

// let tipus = prompt("Quin tipus vols (c per conus, t per terrina)?");
// let sabor = prompt("Quin sabor vols? (vainilla, xocolata, turró, menta, oreo, crema, gerds, ametlles)");

// let preu = 0;
// let dadesCorrectes = true; // Variable para controlar si los datos son correctos

// if (tipus === 'c') {
//     preu = 3.45;
// } else if (tipus === 't') {
//     preu = 3.95;
// } else {
//     console.log("Error dades mal introduïdes: tipus incorrecte");
//     dadesCorrectes = false; // Marcar como incorrecto
// }

// if (sabor === "vainilla" || sabor === "xocolata") {
//     // No se añade costo adicional
// } else if (sabor === "turró" || sabor === "menta" || sabor === "oreo") {
//     preu += 0.5;
// } else if (sabor === "crema" || sabor === "gerds" || sabor === "ametlles") {
//     preu += 1;
// } else {
//     console.log("Error dades mal introduïdes: sabor incorrecte");
//     dadesCorrectes = false; // Marcar como incorrecto
// }

// // Mostrar el precio final solo si todos los datos son correctos
// if (dadesCorrectes==true) {
//     console.log("El preu final és: " + preu + "€");
// }

//    // exercici 14.8. (no esta mal)
// let cost=prompt("Quina quantitat vols pagar")
// let text
// let preuEstandar=30
// let preu=30
// if (cost>=30){
//     text=preu+"€, transport gratuit"
//     console.log(text)
// }
// else{
//     preu=preu+4.95
//     text=preuEstandar+"€, + 4.95 € d'enviament, un total de "+preu+"€"
//     console.log(text)
// }

//     //switch case
// let gelat=prompt("Quin tipus de gelat vols?")
// let sabor=prompt("Quin sabor vols?")
// let preu 
// switch (gelat){
//     case "conus":
//     preu=3.45
//     break;
//     case "terrina":
//     preu=3.95
//     break;
//     default:
//         console.log("tipus no reconegut")
// }
// switch (sabor){
//     case "vainilla":
//     case "xocolata":
//         preu=preu
//     break;
//     case "turró" :
//     case "menta" :
//     case "oreo" :
//         preu=preu+0.5
//     break;
//     case "crema":
//     case "gerds":
//     case "ametlles":
//         preu=preu+1
//     break;
//     default:
//         console.log("Sabor no reconegut");
// }
// console.log("El preu es de "+preu+"€"); 

//         //15.3.3
// let dies=prompt("Diguem un dia de la setmana");
// let text;
// switch(dies){
//     case "L":
//     case "M":
//     case "X":
//     case "J":
//     case "V":
//     text="Dia Laborable";
//     break;
//     case "S":
//     case "D":
//     text="Dia festivo";
//     break;
// }
// console.log(text)

        //For
// //16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.
// let text="";
// let i;
// for (i=0;i<10;i++){
//     text=text+"Estem fent bucles"+"<br>";
// }
// document.write(text)

// //16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els nombres del 5 al 20.
// let i;
// for (i=5;i<20;i++){
//     console.log(i)
// }

// //16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N.
// let n=prompt("Diguem el numero");
// n=Number(n)
// let i
// let suma=0
// for (i=1;i<=n;i++){
//     suma=suma+i
// }
// console.log(suma)

// //16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N.
// let n=prompt("Diguem el numero")
// n=Number(n)
// let i
// let factorial=1
// for(i=1;i<=n;i++){
//     factorial=factorial*i
// }
// console.log(factorial)

// //16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M) calculi la suma de tots els números entre N i M (ambdós inclosos).
// let n=prompt("diguem el numero menor")
// n=Number(n)
// let m=prompt("diguem el numero major")
// m=Number(m)
// let suma=0
// for(n; n<=m; n++){
//     suma=suma+n
// }
// console.log(suma)

// //16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números parells entre 2 i N.
// let n=prompt("diguem el numero")
// n=Number(n)
// let i
// let suma=0
// for(i=2;i<=n;i++){
//     if (i % 2 == 0){
//         suma=suma+i
//     }
// }
// console.log(suma)

// //16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de multiplicar de N.
// let n=prompt("diguem numero");
// n=Number(n)
// let i
// for (i=0;i<=10;i++){
// console.log(n + " x " + i + " = " + (n * i));
// }

// //16.8.- Escriu un programa que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1

// let n=prompt("diguem numero")
//ojo no hemos puesto el n=Number(n)
// let i
// while(n<1){
//     console.log("Error. Dades mal introduïdes.")
//     n=prompt("Escriu un número més gran o igual que 1")
// }
// for(i=n; i>=1; i--){
//     console.log(i)
// }

// //16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*)
// let n=prompt("diguem numero")
// let i
// let asteriscos=""
// for(i=0;i<=n;i++){
//     asteriscos=asteriscos+"*"
// }
// console.log(asteriscos)

// //16.10.- Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el número introduït sigui 5).
// let n=prompt("diguem numero")
// let i
// let asteriscos=""
// for(i=0;i<=n;i++){
//     asteriscos=asteriscos+"*";
//     document.write(asteriscos+"<br>")
// }

//16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la següent:

// ```javascript
// let N = prompt("Introdueix un número N:");
// N=Number(N);
// let M = prompt("Introdueix un número M:");
// M=Number(M);
// let suma = 0;
// let nombre = "";

// for (let i = 1; i <= M; i++) {
//         nombre="";
//     for (let j = 1; j <= i; j++) {
//         nombre += N;
//     }
//     nombre=Number(nombre)
//     suma += (nombre);
//     console.log(nombre);
// }

// console.log("La suma de la sèrie és: " + suma);
// ```


// //Bucles: while
// //17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.
// let text="Estem fent bucles";
// let i=0
// while(i<=10){
// text="Estem fent bucles"
// }
// console.log(text)


// //17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.
// let count = 0;

// while (count < 10) {
//     document.write("Estem fent bucles"+"<br>");
//     count++;
// }

// //17.2.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els nombres del 5 al 20.
// let i=5;
// while (i<=20){
// document.write(i+"<br>");
// i++;
// }

// //17.3.- Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1
// let n=prompt("Diguem el numero gran");
// let i=1
// while (n>=i){
//     console.log(n);
//     n--;
// }

// //17.4.- Escriu un programa que escrigui la seqüència de Fibonnacci des d’u fins a un número N donat.
// let N = parseInt(prompt("Introdueix un número N per a la seqüència de Fibonacci:"));
// let a = 1, b = 1, suma = 0;
// let i = 1;

// console.log(a);
// if (N > 1) {
//     console.log(b);
// }

// while (i <= N - 2) {
//     suma = a + b;
//     console.log(suma);
//     a = b;
//     b = suma;
//     i++;
// }

// //17.5.
// let n=prompt("numero n");
// n=Number(n);
// let m=prompt("numero m");
// m=Number(m);
// let multi=0;
// let i=1;

// while(i<=m){
//     multi=n*i;
//     if (multi>=999999){
//         break
//     }
//     console.log(multi);
//     i++;
// }

