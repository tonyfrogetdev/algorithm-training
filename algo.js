/*Pour un défi intermédiaire en JavaScript, je vais te proposer de créer un algorithme qui recherche le premier caractère non répété dans une chaîne de caractères. Cet exercice te permettra de travailler avec les structures de données, les boucles, et les conditions en JavaScript.

Algorithme: Premier Caractère Non Répété
Objectif: Trouver le premier caractère dans une chaîne qui ne se répète pas.

Entrée: Une chaîne de caractères (par exemple, "aabccd").

Sortie: Le premier caractère non répété (pour "aabccd", la sortie devrait être "b"). Retourner null si tous les caractères se répètent. */

// VERSION MADAGASCODE

const firstNoRepeatCharacter = (string) => {
  const countCharacter = [];

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (countCharacter[character] === undefined) {
      countCharacter[character] = 1;
    } else {
      countCharacter[character]++;
    }
  }

  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (countCharacter[character] === 1) {
      return character;
    }
  }

  return null;
};

console.log(firstNoRepeatCharacter("aabccd"));
console.log(firstNoRepeatCharacter("aaaaabbbbccccdddd"));

// VERSION CHAT-GPT
const trouverPremierCaractereNonRepete = (string) =>
  [...string].find(
    (char) => string.indexOf(char) === string.lastIndexOf(char)
  ) || null;

// Exemple d'utilisation :
console.log(trouverPremierCaractereNonRepete("aabccd")); // Sortie : "b"
console.log(trouverPremierCaractereNonRepete("aaaaabbbbccccdddd")); // Sortie : null

/*
Advent of Code est un calendrier de l'Avent de petits défis de programmation que les gens peuvent résoudre dans n'importe quel langage de programmation pour le plaisir et l'apprentissage. Je vais vous proposer un problème inspiré de ce type de défis, typiquement rencontré dans les éditions précédentes d'Advent of Code.

Problème: Navigation Sous-marine
Imaginons un problème où vous devez naviguer dans un sous-marin dans une grille bidimensionnelle. Vous recevez une série de commandes qui indiquent de se déplacer "forward" (en avant), "up" (vers le haut), ou "down" (vers le bas). Chaque commande est suivie d'un nombre qui indique de combien de cases vous devez vous déplacer dans la direction spécifiée.

Votre but est de calculer la position finale du sous-marin dans la grille après avoir suivi toutes les commandes, puis de multiplier la position horizontale finale par la profondeur finale pour obtenir le résultat.

Entrée: Une liste de commandes sous forme de chaînes de caractères, chaque commande étant suivie d'un espace et d'un nombre (par exemple, ["forward 5", "down 5", "forward 8", ...]).

Sortie: Le produit de la position horizontale finale et de la profondeur finale.
 */

// parametre(commands) , poshorizontal = 0, depth = 0
//forEach((command) => {})
// return poshorizontal * depth
// commands

const horizontalAndDepthCalculate = (commands) => {
  let horizontal = 0;
  let depth = 0;

  commands.forEach((command) => {
    const [direction, numberDirection] = command.split(" ");
    const distance = parseInt(numberDirection);
    if (direction === "forward") {
      horizontal += distance;
    } else if (direction === "up") {
      depth += distance;
    } else if (direction === "down") {
      depth -= distance;
    }
  });

  return horizontal * depth;
};

const commands = ["forward 5", "down 5", "forward 8", "up 2"];

console.log(Math.sign(horizontalAndDepthCalculate(commands)));

/*Exercice : Vérification de palindrome

Écrivez une fonction en JavaScript qui prend une chaîne de caractères en entrée et retourne vrai si la chaîne est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche), sinon retourne faux. Ignorez la casse et les caractères non alphanumériques.

Par exemple :

"radar" est un palindrome
"Élu par cette crapule" est un palindrome
"bonjour" n'est pas un palindrome
Vous pouvez tester votre fonction en appelant la fonction avec différentes chaînes de caractères dans la console JavaScript.  */

const Palindrome = (string) => {
  const orderString = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9)]/g, "")

    .replace(/[\u0300-\u036f]/g, "");

  const reverseString = orderString.split("").reverse().join("");
  console.log(reverseString);
  return orderString === reverseString;
};

console.log(Palindrome("radar"));
console.log(Palindrome("Madam, in Eden, I'm Adam"));
console.log(Palindrome("Élu par cette crapule"));
console.log(Palindrome("Bonjour"));

// Résultat : j'ai réussi pour l'anglais

/* Exercice : Recherche du plus grand élément dans un tableau

Écrivez une fonction en JavaScript appelée trouverPlusGrandElement qui prend un tableau de nombres en entrée et retourne le plus grand élément du tableau. Vous ne devez pas utiliser de méthodes intégrées telles que Math.max().

Par exemple :

Pour le tableau [4, 9, 2, 15, 6], la fonction devrait renvoyer 15.
Pour le tableau [-1, -5, -3, -9, -2], la fonction devrait renvoyer -1.
Vous pouvez tester votre fonction en appelant la fonction avec différents tableaux de nombres dans la console JavaScript. */

const findTheBiggestNumber = (array) => {
  let biggestNumber = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > biggestNumber) {
      biggestNumber = array[i];
    }
  }

  return biggestNumber;
};

console.log(findTheBiggestNumber([4, 9, 2, 15, 6]));
console.log(findTheBiggestNumber([-1, -5, -3, -9, -2]));

/* Voici un problème algorithmique inspiré par "Advent of Code" :

Problème : "Calcul du nombre de sacs"

Vous avez une liste de règles décrivant les sacs et leur contenu. Chaque règle est sous la forme "sac principal contient x sacs de couleur y". Par exemple, une règle pourrait être "sac principal contient 2 sacs de couleur rouge".

Votre tâche est de calculer combien de sacs sont nécessaires pour contenir un sac donné, ainsi que tous les sacs qu'il contient directement ou indirectement.

Écrivez une fonction en JavaScript appelée calculNombreSacs qui prend la liste de règles sous forme de tableau de chaînes de caractères et le nom d'un sac comme entrée, et retourne le nombre total de sacs nécessaires pour contenir ce sac et tous ses sous-sacs.

Par exemple, si vous avez les règles suivantes :

css
Copy code
[ "sac principal contient 2 sacs de couleur rouge.", "sac principal contient 1 sac de couleur jaune.", "sac rouge contient 1 sac de couleur bleue.", "sac jaune contient 2 sacs de couleur verte.", "sac jaune contient 1 sac de couleur violet.", "sac bleu contient 3 sacs de couleur noir."]
Et que vous appelez votre fonction avec "sac principal" comme argument, elle devrait renvoyer 10, car "sac principal" contient 2 sacs rouges, 1 sac jaune (qui contient 2 sacs verts et 1 sac violet) et 3 sacs noirs.

Cet exercice met en œuvre la logique de parcours des règles et de comptage des sacs de manière récursive ou itérative, ce qui est courant dans les problèmes intermédiaires de "Advent of Code".

*/

const bagNumberCalcul = (regles, sacRecherche) => {
  const lesSacs = new Map();

  regles.forEach((regle) => {
    const nomDuSac = regle.split(" contient ")[1].replace("sac", "");

    if (!lesSacs.has(nomDuSac)) {
      lesSacs.set(nomDuSac, []);
    }
  });

  regles.forEach((regle) => {
    const [sac, contenu] = regle.replace(".", "").split(" contient ");
    const nomDuSac = sac.replace("sac", "");

    const contenus =
      contenu === "aucun autre sac"
        ? []
        : contenu.split(", ").map((memeSac) => {
            const match = memeSac.match(/(\d+) sacs? de couleur (.+)/);
            return {
              number: parseInt(match[1]),
              color: match[2],
            };
          });

    lesSacs.set(nomDuSac, contenus);
  });

  const calculerSousSac = (sac) => {
    const contenus = lesSacs.get(sac) || [];

    return contenus.reduce((total, { number, color }) => {
      return total + number + number * calculerSousSac(color);
    }, 0);
  };
  return calculerSousSac(sacRecherche.replace(" sac", ""));
};

const reglesSac = [
  "sac principal contient 2 sacs de couleur rouge",
  "sac principal contient 1 sac de couleur jaune",
  "sac rouge contient 1 sac de couleur bleue",
  "sac jaune contient 2 sacs de couleur verte",
  "sac jaune contient 1 sac de couleur violet",
  "sac bleu contient 3 sacs de couleur noir",
];

console.log(bagNumberCalcul(reglesSac, "sac principal"));

const averageCalculNotes = () => {
  let total = 0;
  let numberOfNotes = 0;

  while (true) {
    const input = prompt("Entrez une note (-1 pour terminer)");

    if (input === "-1") {
      break;
    }

    const inputNumber = parseInt(input);

    if (!isNaN(inputNumber)) {
      total += inputNumber;
      numberOfNotes++;
    } else {
      alert("Veuillez entrer une note valide");
    }
  }

  if (numberOfNotes > 0) {
    let average = total / numberOfNotes;
    alert(`La moyenne des notes est : ${average}`);
  } else {
    alert(`Aucune note est saisie !`);
  }
};

averageCalculNotes();
