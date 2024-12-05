        //Altres maneres de definir funcions
//     //Expressió de funció anònima
// const quadrat = function (number) {
//     return number * number;
//     };
//     let x = quadrat(4); // Assignem 16 a x

//     //Expressió de funció amb nom
// let num =parseInt(prompt("diguem un número"));
// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
//     };
//     console.log(factorial(num));

//     //Mètodes per treballar amb arrays
// //Funció map(), modifica l'array a partir de la funció passada com a paràmetre
// let taula = [1,5,10,15];
// const fun = function (num) {
// return num*4;
// }
// let novaTaula = taula.map(fun);
// console.log(novaTaula);

// //Funció filter(), Filtra el contingut de l'array, creant un nou array només amb els elements seleccionats.
// let taula = [1,5,10,15,23,56,92,34,67];
// const fun = function (num) {
// return num % 2 === 0;
// }
// let novaTaula = taula.filter(fun);
// console.log(novaTaula);