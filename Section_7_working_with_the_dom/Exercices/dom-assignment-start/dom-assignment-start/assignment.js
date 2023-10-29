// Sélectionnez le premier élément de la liste par son ID et modifiez son style
const tache1 = document.getElementById("tache-1");
tache1.style.backgroundColor = "black";
tache1.style.color = "white";

// Sélectionnez l'élément du titre de deux manières différentes et modifiez son texte
const elementTitre = document.querySelector("title");
elementTitre.textContent = "Exercice - Résolu connard !";

const elementTitreAlt = document.head.querySelector("title");
elementTitreAlt.textContent = "Exercice - Résolu connard !";

// Sélectionnez l'élément h1 et modifiez son texte
const h1Element = document.querySelector("h1");
h1Element.textContent = "Exercice - Résolu !";
