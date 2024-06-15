// Tableau de notes possibles
var notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Correspondance des notes avec leurs fichiers audio pour chaque instrument
var noteAudioMap = {
    'piano': {
        'C': 'notes/piano/C.mp3',
        'C#': 'notes/piano/Csharp.mp3',
        'D': 'notes/piano/D.mp3',
        'D#': 'notes/piano/Dsharp.mp3',
        'E': 'notes/piano/E.mp3',
        'F': 'notes/piano/F.mp3',
        'F#': 'notes/piano/Fsharp.mp3',
        'G': 'notes/piano/G.mp3',
        'G#': 'notes/piano/Gsharp.mp3',
        'A': 'notes/piano/A.mp3',
        'A#': 'notes/piano/Asharp.mp3',
        'B': 'notes/piano/B.mp3'
    },
    'guitar': {
        'C': 'notes/guitare/C.mp3',
        'C#': 'notes/guitare/Csharp.mp3',
        'D': 'notes/guitare/D.mp3',
        'D#': 'notes/guitare/Dsharp.mp3',
        'E': 'notes/guitare/E.mp3',
        'F': 'notes/guitare/F.mp3',
        'F#': 'notes/guitare/Fsharp.mp3',
        'G': 'notes/guitare/G.mp3',
        'G#': 'notes/guitare/Gsharp.mp3',
        'A': 'notes/guitare/A.mp3',
        'A#': 'notes/guitare/Asharp.mp3',
        'B': 'notes/guitare/B.mp3'
    },
    'trompette': {
        'C': 'notes/trompette/C.mp3',
        'C#': 'notes/trompette/Csharp.mp3',
        'D': 'notes/trompette/D.mp3',
        'D#': 'notes/trompette/Dsharp.mp3',
        'E': 'notes/trompette/E.mp3',
        'F': 'notes/trompette/F.mp3',
        'F#': 'notes/trompette/Fsharp.mp3',
        'G': 'notes/trompette/G.mp3',
        'G#': 'notes/trompette/Gsharp.mp3',
        'A': 'notes/trompette/A.mp3',
        'A#': 'notes/trompette/Asharp.mp3',
        'B': 'notes/trompette/B.mp3'
    }
};

// Variable globale pour stocker la note actuelle
var currentNote;

// Variable globale pour stocker l'instrument actuel
var currentInstrument = 'piano';

// Variable globale pour stocker le score
var score = 0;

// Fonction pour sélectionner l'instrument
function selectInstrument(instrument, element) {
    currentInstrument = instrument;
    document.getElementById('result').textContent = 'Instrument sélectionné : ' + instrument;
    
    // Retirer la classe 'selected' de tous les logos d'instruments
    var logos = document.querySelectorAll('.instrument-logo');
    logos.forEach(function(logo) {
        logo.classList.remove('selected');
    });
    
    // Ajouter la classe 'selected' au logo d'instrument cliqué
    element.classList.add('selected');
}

// Fonction pour jouer une note aléatoire
function playRandomNote() {
    var randomIndex = Math.floor(Math.random() * notes.length);
    currentNote = notes[randomIndex];
    var audio = new Audio(noteAudioMap[currentInstrument][currentNote]);
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
