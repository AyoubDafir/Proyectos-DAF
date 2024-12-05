let num =parseInt(prompt("diguem un número"));
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
    };
    console.log(factorial(num));
    