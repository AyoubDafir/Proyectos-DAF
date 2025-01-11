                //Arrays
    //exemples:
// Exemple 1:
// let temperatura = [25, 24, 20, 23, 22, 25, 27, 26, 23, 27];
// let temperatura_mig=0;
// let temperatura_max=temperatura[0];
// for(let i=0; i<temperatura.length; i++){
//     if (temperatura_max < temperatura[i]) {
//         temperatura_max = temperatura[i];
//       }
//     temperatura_mig= temperatura_mig + temperatura[i];
// }
// temperatura_mig = temperatura_mig / temperatura.length;
// console.log(temperatura_mig);     
// console.log(temperatura_max);        
                
// //Exemple 2:
// let text = "Le mieux les mots intacts, ce qui les empêche d'être altérés";

// let i = 0;

// while (i < text.length && text[i] != "ê") {
//   i++;
// }

// if (text[i] == "ê") {
//   console.log("Aquest text està en francès!");
// } else {
//   console.log("Aquest text segurament no està en francès");
// }

                
                
                
                //Funcions
    //exemples:
// //1r exemple:
// let a = 25;
// let b = 35;
// function laMevaFun(c) {
// let b = a + c;
// a = c;
// return b;
// }
// console.log (laMevaFun(50));
// console.log (a);
// console.log (b);


                //OBJECTES:
// //exemples:
// //no cal construir l’objecte string amb new
// let nom = 'Programació Avançada';
// alert (nom.length); //propietat. Mostra 20
// alert (nom.substring(12)); //mètode. Mostra Avançada

//exemple 1:
// let llibre = {
//     titol: "El petit príncep",
//     autor: "Antoine de Saint-Exupéry",
//     preu: 15
//   };
// console.log(llibre);  

// exemple 2:
// function Persona(nom, dni, dn) {
//   this.nom = nom;
//   this.dni = dni;
//   this.dataNaix = new Date(dn);
// }

// let persona1 = new Persona(
//   "Cristina Casanova Esteve",
//   "52535948W",
//   "2002/04/28"
// );
// console.log(persona1);
// let persona2 = new Persona("Andreu", "55214587T", "2002/02/03");

//exemple 3:
// function Auto(marca, modelo, potencia, antiguedad, precio) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.potencia = potencia;
//   this.antiguedad = antiguedad;
//   this.precio = precio;
// }
// let miAuto = new Auto("fdsfdsf", "Ibiza", 90, 2010, 0);
// let otroAuto = new Auto("Opel", "Astra", 92, 1995, 500);
// console.log(miAuto);
// miAuto.precio = 5000;
// miAuto.marca = "Fiat"; // canviem el contingut de la propietat
// console.log(miAuto);

// // L'avantatge de la notació de claudàtors és que pots accedir a una propietat mitjançant el valor guardat en una variable

// let propietat = "precio";
// console.log(miAuto[propietat]); // Escriurà en la consola el valor de la propietat precio. Equivalent miAuto.precio

// //FOR que recórrer OBJECTES
// for (let i in miAuto) {
//                         // i anirà prenent els noms de totes les
//                         // propietats que tingui miAuto
//   console.log(miAuto[i]); // Escriurà a la consola els valors de totes les propietats
// }

//exemple 3:
// let miAuto = new Auto("Seat", "Ibiza", 90, 2010, 5000);
// let miAuto2 = new Auto("Seat", "Ibiza", 90, 2010, 5000);
// // Los comparamos
// console.log(miAuto == miAuto2);
// // Dice que no son iguales
// // Creamos una función que compare todos los campos uno a uno
// function comparaAutos(auto1, auto2) {
//   let iguales = true;
//   for (let i in auto2) {
//     if (auto1[i] != auto2[i]) {
//       iguales = false;
//       break; // Atura el bucle quan trobi una diferència
//     }
//   }
//   return iguales;
// }

// // Llamamos a la función
// console.log(comparaAutos(miAuto, miAuto2));

//exemple 4:
// // Objecte amb una funció (mètode) dins
// let cotxe = {
//   marca: "Toyota",
//   model: "Corolla",
//   any: 2020,
//   descripcio: function () {
//     return "Aquest cotxe és un this.marca this.model de l'any this.any.-;
//   }
// };

// // Cridem el mètode de l'objecte
// console.log(cotxe.descripcio());

// //exemple 5: (with):
// function Persona(nom, dni, dn) {
//   this.nom = nom;
//   this.dni = dni;
//   this.dataNaix = new Date(dn);
// }

// let persona1 = new Persona(
//   "Cristina Casanova Esteve",
//   "52535948W",
//   "2002/04/28"
// );
// with(persona1){
//     console.log(nom);
//     console.log(dni);
//     console.log(dataNaix);
// }

//exemple 6: (getters and setters):
// class Persona {
//     constructor(nom, dni, dn) {
//       this._nom = nom; // Propietats privades (amb _)
//       this._dni = dni;
//       this._dataNaix = new Date(dn);
//     }
  
//     // Getter per obtenir el nom
//     get nom() {
//       return this._nom;
//     }
  
//     // Setter per modificar el nom
//     set nom(nouNom) {
//       if (nouNom.length > 0) {
//         this._nom = nouNom;
//       } else {
//         alert ("El nom no pot estar buit.");
//       }
//     }
  
//     // Getter per obtenir el DNI
//     get dni() {
//       return this._dni;
//     }
  
//     // Setter per modificar el DNI
//     set dni(nouDni) {
//       if (nouDni.match(/^\d{8}[A-Z]$/)) {
//         this._dni = nouDni;
//       } else {
//         console.error("El DNI no és vàlid. Ha de tenir 8 números seguits d'una lletra.");
//       }
//     }
  
//     // Getter per obtenir la data de naixement
//     get dataNaix() {
//       return this._dataNaix;
//     }
  
//     // Setter per modificar la data de naixement
//     set dataNaix(novaDataNaix) {
//       const novaData = new Date(novaDataNaix);
//       if (!isNaN(novaData.getTime())) {
//         this._dataNaix = novaData;
//       } else {
//         console.error("La data de naixement no és vàlida.");
//       }
//     }
  
//     // Mètode per calcular l'edat
//     edat() {
//       let avui = new Date();
//       let edad = avui.getFullYear() - this._dataNaix.getFullYear();
//       if (
//         avui.getMonth() < this._dataNaix.getMonth() ||
//         (avui.getMonth() === this._dataNaix.getMonth() && avui.getDate() < this._dataNaix.getDate())
//       ) {
//         edad--;
//       }
//       return edad;
//     }
  
//     // Mètode per escriure el nom diverses vegades
//     escriuNom(vegades) {
//       for (let i = 0; i < vegades; i++) {
//         console.log(this._nom);
//       }
//     }
//   }
  
//   // Exemple d'ús
//  // Exemple d'ús
// let persona = new Persona("Maria", "12345678Z", "1995-10-25");

// console.log(persona.nom); // Accedir al nom amb el getter
// persona.nom = "Pedro Lopez"; // Modificar el nom amb el setter
// console.log(persona.nom); // Torna a mostrar el nom després de modificar-lo

// // Provar de modificar amb un nom nou incorrecte
// persona.nom = "Pedro"; // Això funciona perquè el nom no està buit
// console.log(persona.nom);

// console.log(persona.dni); // Accedir al DNI amb el getter
// persona.dni = "87654421X"; // Modificar el DNI amb el setter
// console.log(persona.dni);

// console.log(`Edat: ${persona.edat()} anys`); // Calcular l'edat

// // Provar d'escriure el nom 3 vegades
// persona.escriuNom(3);

                            //DOM
