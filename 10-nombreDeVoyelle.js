/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  if (typeof phrase !== "string") {
    return 0; // si l'entrée n'est pas une chaîne, on retourne 0
  }

  let compteur = 0;
  const voyelles = "aeiouy";

  for (let i = 0; i < phrase.length; i++) {
    const lettre = phrase[i].toLowerCase(); // insensible à la casse
    if (voyelles.includes(lettre)) {
      compteur++;
    }
  }

  return compteur;
}
console.log(nombreDeVoyelles("BONJOUR TOUT LE MONDE")); 


// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
