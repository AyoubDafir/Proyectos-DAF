
function convertirMajuscula(input) {     // Aquesta funció converteix el text introduït en un camp d'entrada perquè només la primera lletra de cada paraula estigui en majúscula.
    input.value = input.value
        .toLowerCase() // Converteix tot a minúscules.
        .replace(/\b\w/g, char => char.toUpperCase()); // Converteix a majúscula la primera lletra de cada paraula. 
        // Cerca cada paraula (\b marca el límit de paraula) i converteix la primera lletra (\w) a majúscula.
}

 // Mostrar/ocultar contrasenya principal
 document.getElementById("ocultarContrasenya").addEventListener("change", function () { // Aquesta funció s'executa quan l'usuari marca o desmarca el checkbox "Mostra Contrasenya".
    const contrasenyaField = document.getElementById("contrasenya"); // Obtenim el camp de la contrasenya.
    contrasenyaField.type = this.checked ? "text" : "password"; // Si el checkbox està marcat (`this.checked` és cert), el camp es mostra com a text.
    // Si està desmarcat, es torna al tipus "password" per amagar el contingut.
});

// Mostrar/ocultar confirmar contrasenya
document.getElementById("ocultarConfirmarContrasenya").addEventListener("change", function () { // Aquesta funció permet mostrar o amagar el contingut del camp "Confirmar Contrasenya".
    const confirmarContrasenyaField = document.getElementById("confirmarContrasenya"); // Obtenim el camp de confirmació.
    confirmarContrasenyaField.type = this.checked ? "text" : "password"; // Si el checkbox està marcat, es mostra el text; si no, es torna al tipus "password".
});

// Validar coincidència de contrasenyes al escriure en el camp de confirmar contrasenya
document.getElementById("confirmarContrasenya").addEventListener("input", function () { // Aquesta funció s'executa cada vegada que l'usuari escriu en el camp de confirmació de la contrasenya.
    const contrasenya = document.getElementById("contrasenya").value; // Obtenim el valor del camp principal de contrasenya.
    const confirmarContrasenya = this.value; // Obtenim el valor del camp de confirmació.
    const errorMessage = document.getElementById("errorMessage"); // Seleccionem l'element on es mostra el missatge d'error.
    if (contrasenya !== confirmarContrasenya) {
        errorMessage.style.display = "inline"; // Si les contrasenyes no coincideixen, mostrem el missatge d'error canviant el display a "inline".
    } else {
        errorMessage.style.display = "none"; // Si les contrasenyes coincideixen, amaguem el missatge d'error posant display a "none".
    }
});
// Validar coincidència de contrasenyes al enviar el formulari
document.getElementById("form").addEventListener("submit", function (event) { // Aquesta funció valida que les dues contrasenyes coincideixin abans d'enviar el formulari.
    const contrasenya = document.getElementById("contrasenya").value; // Obtenim el valor del camp principal de contrasenya.
    const confirmarContrasenya = document.getElementById("confirmarContrasenya").value; // Obtenim el valor del camp de confirmació.
    // Si las contraseñas no coinciden, se detiene el envío
    if (contrasenya !== confirmarContrasenya) { // Si les contrasenyes no coincideixen, aturem l'enviament del formulari amb `event.preventDefault()`.
        event.preventDefault(); 
        alert("Les contrasenyes no coincideixen."); // Mostrem un missatge d'alerta a l'usuari perquè entengui què està passant.
    }
});