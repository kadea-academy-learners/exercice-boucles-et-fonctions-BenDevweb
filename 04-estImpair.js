/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  let test = n % 2;

  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n)) {
    return null;
  }

  if (test === 0){
    return false;
  }
  if (test !== 0){
    return true;
  } 
}
console.log(estImpair(3))


// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
