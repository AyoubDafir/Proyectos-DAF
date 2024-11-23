//Exercicis del Document Object Model (DOM)
/****** Exercici 5.1 ******/

// Opció a: Número d'enllaços que hi ha a la pàgina
function e51a() {
  let numEnllacos = document.links.length;
  alert(numEnllacos);
}

// Opció b: Adreça (URL) del penúltim enllaç
function e51b() {
        let numEnllacos = document.links.length;
  if (numEnllacos >= 2) {
    let penultimEnllac = document.links[document.links.length - 2].href;
    alert(penultimEnllac);
  } else {
    alert("No hi ha enllaç");
  }
}

// Opció c: Número d'enllaços que apunten a http://www.uab.cat
function e51c() {}
//  5.1C Amb condicionals i bucles senzills sense filter()
// Opció d: Número d'enllaços al tercer paràgraf
function e51d() {}

/****** Exercici 5.2 ******/
// a. Al final de dels paràgrafs existents.
function e52a() {}
// b. Entre el segon i el tercer paràgraf.
function e52b() {}

/****** Exercici 5.3 ******/
// Afegir "Salve Mundi!" a la llista en penúltima posició.
function e53a() {}
// Canviar l'estil de la llista
function e53b() {}

/****** Exercici 5.4 ******/
// Amagar el 2on paràgraf
function e54() {}
