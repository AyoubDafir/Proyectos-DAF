// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:



// Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
// que ompliu el codi necessari.

function exercici01() {
    let totalAccidents = obj.length;
    document.getElementById("resultats").innerHTML = "Nombre total d'accidents: " + totalAccidents;
}
document.getElementById('exer01').addEventListener('click', exercici01);



function exercici02() {
    let accidentsPerDia = {};

    for (let i = 0; i < obj.length; i++) {
        let accident = obj[i];
        let dia = accident.diaSet; 
        if (accidentsPerDia[dia]) {
            accidentsPerDia[dia]++;
        } else {
            accidentsPerDia[dia] = 1;
        }
    }

    let diaMaxAccidents = ""; 
    let maxAccidents = 0;     

    for (let dia in accidentsPerDia) {
        if (accidentsPerDia[dia] > maxAccidents) {
            maxAccidents = accidentsPerDia[dia]; 
            diaMaxAccidents = dia; 
        }
    }

    let resultat = "El dia amb més accidents és: " + diaMaxAccidents + " amb " + maxAccidents + " accidents.";
    document.getElementById("resultats").innerHTML = resultat;
}

document.getElementById('exer02').addEventListener('click', exercici02);



function exercici03() {
    let accidentsPerDistricte = {};

    for (let i = 0; i < obj.length; i++) {
        let accident = obj[i]; 
        let districte;

        if (accident.nDist === -1) {
            districte = "Altres";
        } else {
            districte = accident.nDist; 
        }

        if (accidentsPerDistricte[districte]) {
            accidentsPerDistricte[districte]++;
        } else {
            accidentsPerDistricte[districte] = 1;
        }
    }

    let llista = "<ul>";
    if (accidentsPerDistricte["Altres"]) {
        llista += "<li>Altres: " + accidentsPerDistricte["Altres"] + " accidents</li><br>";
    }

    for (let i = 1; i <= 10; i++) {
        if (accidentsPerDistricte[i]) {
            llista += "<li>Districte " + i + ": " + accidentsPerDistricte[i] + " accidents</li><br>";
        }
    }

    llista += "</ul>";

    document.getElementById("resultats").innerHTML = llista;
}

document.getElementById('exer03').addEventListener('click', exercici03);





function exercici04() {
    creaFormulari(); 
    document.getElementById("districtes").addEventListener("change", function() {
        let districteSeleccionat = this.value;
        let accidentsDistricte = 0;

        for (let i = 0; i < obj.length; i++) {
            if (obj[i].districte === districteSeleccionat) {
                accidentsDistricte++;
            }
        }

        let resultat = "Nombre d'accidents al districte " + districteSeleccionat + ": " + accidentsDistricte;
        
        document.getElementById("resultats").innerHTML = resultat;
    });
}

document.getElementById('exer04').addEventListener('click', exercici04);
