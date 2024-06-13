// Tableau de lettres possibles
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// Tableau de correspondance lettre -> note
var letterNoteMap = {
    'A': 'la',
    'B': 'si',
    'C': 'do',
    'D': 'ré',
    'E': 'mi',
    'F': 'fa',
    'G': 'sol'
};

// Variable globale pour stocker le score
var score = 0;

// Variable globale pour stocker le nombre de notes restantes
var notesLeft;

// Fonction pour démarrer le jeu avec une série de 15 notes
function startGame() {
    score = 0; // Réinitialiser le score à zéro
    updateScore(); // Mettre à jour l'affichage du score
    document.getElementById('result').textContent = ''; // Effacer le résultat précédent
    document.getElementById('guess').removeAttribute('disabled'); // Activer le champ de saisie

    notesLeft = 15; // Nombre de notes restantes dans la série
    generateNextNote(); // Appeler la fonction pour générer la première note
}

// Fonction pour générer une lettre aléatoire
function generateRandomLetter() {
    var randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}

// Fonction pour générer la prochaine note
function generateNextNote() {
    var letterElement = document.getElementById('letter');
    letterElement.classList.remove('correct', 'incorrect'); // Enlever les classes correct et incorrect

    if (notesLeft > 0) {
        var randomLetter = generateRandomLetter();
        letterElement.textContent = randomLetter;
        document.getElementById('guess').value = ''; // Effacer le champ de saisie
        notesLeft--; // Décrémenter le nombre de notes restantes
    } else {
        letterElement.textContent = ''; // Effacer la lettre affichée
        document.getElementById('guess').setAttribute('disabled', 'disabled'); // Désactiver le champ de saisie
        document.getElementById('score').textContent = 'Score final : ' + score; // Afficher le score final
    }
}

// Fonction pour vérifier la réponse de l'utilisateur
function checkGuess() {
    var letterElement = document.getElementById('letter');
    var letter = letterElement.textContent.toUpperCase(); // Convertir en majuscules
    var guess = document.getElementById('guess').value.toLowerCase(); // Convertir en minuscules

    if (guess === letterNoteMap[letter]) {
        document.getElementById('result').textContent = "Correct!";
        letterElement.classList.add('correct');
        score++; // Incrémenter le score si la réponse est correcte
        updateScore(); // Mettre à jour l'affichage du score
    } else {
        document.getElementById('result').textContent = "Incorrect, la note était " + letterNoteMap[letter];
        letterElement.classList.add('incorrect');
    }

    setTimeout(generateNextNote, 1000); // Attendre 1 seconde avant de passer à la prochaine note
}

// Fonction pour vérifier si la touche pressée est "Entrée"
function checkEnter(event) {
    if (event.keyCode === 13) { // Vérifier si la touche pressée est "Entrée"
        checkGuess(); // Appeler checkGuess() pour vérifier la réponse
    }
}

// Fonction pour mettre à jour l'affichage du score
function updateScore() {
    document.getElementById('scoreValue').textContent = score; // Mettre à jour le score affiché
}

// Appeler la fonction startGame au chargement de la page
window.onload = startGame;
