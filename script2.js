// Tableau de notes possibles
var notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Correspondance des notes avec leurs fichiers audio
var noteAudioMap = {
    'C': '../notes/C.mp3',
    'C#': '../notes/Csharp.mp3',
    'D': '../notes/D.mp3',
    'D#': '../notes/Dsharp.mp3',
    'E': '../notes/E.mp3',
    'F': '../notes/F.mp3',
    'F#': '../notes/Fsharp.mp3',
    'G': '../notes/G.mp3',
    'G#': '../notes/Gsharp.mp3',
    'A': '../notes/A.mp3',
    'A#': '../notes/Asharp.mp3',
    'B': '../notes/B.mp3'
};

// Variable globale pour stocker la note actuelle
var currentNote;

// Variable globale pour stocker le score
var score = 0;

// Fonction pour jouer une note aléatoire
function playRandomNote() {
    var randomIndex = Math.floor(Math.random() * notes.length);
    currentNote = notes[randomIndex];
    var audio = new Audio(noteAudioMap[currentNote]);
    audio.play();

    // Arrêter l'audio après 3 secondes
    setTimeout(function() {
        audio.pause();
    }, 3000);
}

// Fonction pour vérifier la réponse de l'utilisateur
function checkGuess(note) {
    if (note === currentNote) {
        document.getElementById('result').textContent = "Correct!";
        score++; // Incrémenter le score si la réponse est correcte
        updateScore(); // Mettre à jour l'affichage du score
    } else {
        document.getElementById('result').textContent = "Incorrect, la note était " + currentNote;
    }

    // Ne joue pas automatiquement la prochaine note, l'utilisateur doit cliquer pour rejouer
}

// Fonction pour mettre à jour l'affichage du score
function updateScore() {
    document.getElementById('scoreValue').textContent = score; // Mettre à jour le score affiché
}

// Aucune action au chargement de la page, attendre que l'utilisateur clique sur "Jouer une note"
