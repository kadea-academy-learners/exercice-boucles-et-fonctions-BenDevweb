/*
  Énoncé :
  Écris une fonction `factorielle(n)` qui retourne la factorielle de `n`.
  - Si n est négatif ou invalide, retourner 0
  - Exemple : factorielle(5) => 120

  Signature attendue :
    function factorielle(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function factorielle(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    return 0;
  }

  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }

  return resultat;
}
console.log(factorielle(4));
// Ne pas modifier la ligne ci-dessous
module.exports = { factorielle }
