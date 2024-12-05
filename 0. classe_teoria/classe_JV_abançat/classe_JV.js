        //Altres maneres de definir funcions
//     //Expressió de funció anònima
// const quadrat = function (number) {
//     return number * number;
//     };
//     let x = quadrat(4); // Assignem 16 a x

    //Expressió de funció amb nom
let num =parseInt(prompt("diguem un número"));
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
    };
    console.log(factorial(num));
    