// assignment.js

// 1. Opérations sur un tableau de nombres
const numbers = [1, 6, 3, 8, 4, 10];

// Filtrage des nombres supérieurs à 5
const filteredNumbers = numbers.filter(num => num > 5);

// Mappage de chaque nombre en un objet
const mappedNumbers = filteredNumbers.map(num => ({ num }));

// Réduction du tableau en un seul nombre (multiplication de tous les nombres)
const multipliedTotal = mappedNumbers.reduce((total, obj) => total * obj.num, 1);

// 2. Fonction findMax
function findMax(...args) {
  return Math.max(...args);
}

// Utilisation de la fonction avec le tableau 'numbers'
const maxNumber = findMax(...numbers);

// 3. Modification de findMax pour Trouver le Minimum et le Maximum
function findMinMax(...args) {
  return [Math.min(...args), Math.max(...args)];
}

// Destructuration pour stocker les résultats
const [minNumber, maxNumberMinMax] = findMinMax(...numbers);

// 4. Liste sans Doublons
const uniqueNumbers = new Set();

// Ajout de nombres dans le Set (les doublons seront ignorés)
numbers.forEach(num => uniqueNumbers.add(num));
// Vous pouvez ajouter d'autres nombres ici pour tester

// Affichage des résultats dans la console pour vérification
console.log("Filtered Numbers: ", filteredNumbers);
console.log("Mapped Numbers: ", mappedNumbers);
console.log("Multiplied Total: ", multipliedTotal);
console.log("Max Number: ", maxNumber);
console.log("Min and Max Numbers: ", minNumber, maxNumberMinMax);
console.log("Unique Numbers: ", Array.from(uniqueNumbers));
