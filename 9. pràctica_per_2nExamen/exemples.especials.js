//Exemple 3.
let numeros = [10, 2, 5, 1, 9];

// Ordenar de menor a major
numeros.sort((a, b) => a - b);
console.log("Ascendent:", numeros); // Sortida: [1, 2, 5, 9, 10]

// Ordenar de major a menor
numeros.sort((a, b) => b - a);
console.log("Descendent:", numeros); // Sortida: [10, 9, 5, 2, 1]

//Exemple 2.
let persones = [
    { nom: "Anna", edat: 28 },
    { nom: "Joan", edat: 22 },
    { nom: "Maria", edat: 35 }
];

// Ordenar per edat de menor a major
persones.sort((a, b) => a.edat - b.edat);
console.log(persones);

// Ordenar per nom alfabèticament
persones.sort((a, b) => a.nom.localeCompare(b.nom));
console.log(persones);
 
