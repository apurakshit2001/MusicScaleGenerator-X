function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function transposeChord(chord, semitones) {
    const chords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    let root = chord.match(/^[A-G]#?/)[0];
    let modifier = chord.slice(root.length);
    let currentIndex = chords.indexOf(root);
    let newIndex = (currentIndex + semitones + 12) % 12;
    return chords[newIndex] + modifier;
}

function transposeProgression(semitones) {
    let progression = document.getElementById('inputChords').value; // Corrected reference
    let chordsArray = progression.split(/\s+/); // Ensure consistency in splitting
    let transposedChords = chordsArray.map(chord => transposeChord(chord, semitones));
    document.getElementById('inputChords').value = transposedChords.join(' '); // Ensure consistency in joining
    document.getElementById('outputChords').value = `Transposed Chord Progression: ${transposedChords.join(' ')}`; // Corrected property usage and ensure consistency in joining
}

function changeNotation() {
    const sharpChords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const flatChords = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    let useSharps = document.getElementById('notationSelect').value === 'sharp';
    let progression = document.getElementById('inputChords').value;
    let chordsArray = progression.split(/\s+/);

    let transposedChords = chordsArray.map(chord => {
        let rootMatch = chord.match(/^[A-G][#b]?/);
        if (!rootMatch) return chord; // Return the chord as is if it doesn't match the pattern
        let root = rootMatch[0];
        let modifier = chord.slice(root.length);
        let currentIndex = sharpChords.indexOf(root);
        if (currentIndex === -1) {
            currentIndex = flatChords.indexOf(root);
        }
        if (currentIndex === -1) return chord; // Return the chord as is if it's not found in either array
        return useSharps ? sharpChords[currentIndex] + modifier : flatChords[currentIndex] + modifier;
    });

    document.getElementById('outputChords').value = transposedChords.join(' '); // Ensure consistency in joining
    document.getElementById('inputChords').value = transposedChords.join(' '); // Ensure consistency in joining
}