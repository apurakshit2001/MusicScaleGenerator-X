// script.js

function majorScale() {
    const noteValue = document.getElementById("noteInput").value;
    const note = noteValue.toUpperCase();
    const scale = document.getElementById("Scale");
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let majorFormula = [2, 2, 1, 2, 2, 2, 1];
    let majorScale = [];
    let noteIndex = scaleArray.indexOf(note);
    for (let i = 0; i < majorFormula.length; i++) {
        noteIndex = noteIndex + majorFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        majorScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Major scale.`
    scale.innerHTML = `${note}, ${majorScale.join(", ")}`;
}

function minorScale() {
    const noteValue = document.getElementById("noteInput").value;
    const note = noteValue.toUpperCase();
    const scale = document.getElementById("Scale");
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let minorFormula = [2, 1, 2, 2, 1, 2, 2];
    let minorScale = [];
    let noteIndex = scaleArray.indexOf(note);
    for (let i = 0; i < minorFormula.length; i++) {
        noteIndex = noteIndex + minorFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        minorScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Minor scale.`
    scale.innerHTML = `${note}, ${minorScale.join(", ")}`;
}

function maJchord() {
    const noteValue = document.getElementById("noteInput").value;
    const note = noteValue.toUpperCase();
    const scale = document.getElementById("Scale");
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]; 
    let chordFormula = [4, 3];
    let chordScale = [];
    let noteIndex = scaleArray.indexOf(note);
    for (let i = 0; i < chordFormula.length; i++) {
        noteIndex = noteIndex + chordFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        chordScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Major chord.`
    scale.innerHTML = `${note}, ${chordScale.join(", ")}`;
}

function miNchord() {
    const noteValue = document.getElementById("noteInput").value;
    const note = noteValue.toUpperCase();
    const scale = document.getElementById("Scale");
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let chordFormula = [3, 4];
    let chordScale = [];
    let noteIndex = scaleArray.indexOf(note);
    for (let i = 0; i < chordFormula.length; i++) {
        noteIndex = noteIndex + chordFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        chordScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Minor chord.`
    scale.innerHTML = `${note}, ${chordScale.join(", ")}`
}

function reset() {
    document.getElementById("noteInput").value = "";
    document.getElementById("Scale").innerHTML = "";
    document.getElementById("heading").innerHTML = "Enter any note to receive its desired scale.";
}

function harmonicMinor() {
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let noteValue = document.getElementById("noteInput").value;
    let note = noteValue.toUpperCase();
    let scale = document.getElementById("Scale");
    let noteIndex = scaleArray.indexOf(note);
    let harmonicMinorFormula = [2, 1, 2, 2, 1, 3, 1];
    let harmonicMinorScale = [];
    for (let i = 0; i < harmonicMinorFormula.length; i++) {
        noteIndex = noteIndex + harmonicMinorFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        harmonicMinorScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Harmonic Minor scale.`
    scale.innerHTML = `${note}, ${harmonicMinorScale.join(", ")}`
}

function melodicMinor() {
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let noteValue = document.getElementById("noteInput").value;
    let note = noteValue.toUpperCase();
    let scale = document.getElementById("Scale");
    let noteIndex = scaleArray.indexOf(note);
    let melodicMinorFormula = [2, 1, 2, 2, 2, 2, 1];
    let melodicMinorScale = [];
    for (let i = 0; i < melodicMinorFormula.length; i++) {
        noteIndex = noteIndex + melodicMinorFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        melodicMinorScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Melodic Minor scale.`
    scale.innerHTML = `${note}, ${melodicMinorScale.join(", ")}`
}

function blues() {
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let noteValue = document.getElementById("noteInput").value;
    let note = noteValue.toUpperCase();
    let scale = document.getElementById("Scale");
    let noteIndex = scaleArray.indexOf(note);
    let bluesFormula = [3, 2, 1, 2, 2, 1, 3, 1];
    let bluesScale = [];
    for (let i = 0; i < bluesFormula.length; i++) {
        noteIndex = noteIndex + bluesFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        bluesScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Blues scale.`
    scale.innerHTML = `${note}, ${bluesScale.join(", ")}`
}

function dorian() {
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let noteValue = document.getElementById("noteInput").value;
    let note = noteValue.toUpperCase();
    let scale = document.getElementById("Scale");
    let noteIndex = scaleArray.indexOf(note);
    let dorianFormula = [2, 1, 2, 2, 1, 2, 2];
    let dorianScale = [];
    for (let i = 0; i < dorianFormula.length; i++) {
        noteIndex = noteIndex + dorianFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        dorianScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Dorian scale.`
    scale.innerHTML = `${note}, ${dorianScale.join(", ")}`
}

function phrygian() {
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let noteValue = document.getElementById("noteInput").value;
    let note = noteValue.toUpperCase();
    let scale = document.getElementById("Scale");
    let noteIndex = scaleArray.indexOf(note);
    let phrygianFormula = [1, 2, 2, 2, 1, 2, 2];
    let phrygianScale = [];
    for (let i = 0; i < phrygianFormula.length; i++) {
        noteIndex = noteIndex + phrygianFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        phrygianScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Phrygian scale.`
    scale.innerHTML = `${note}, ${phrygianScale.join(", ")}`
}

function lydian() {
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let noteValue = document.getElementById("noteInput").value;
    let note = noteValue.toUpperCase();
    let scale = document.getElementById("Scale");
    let noteIndex = scaleArray.indexOf(note);
    let lydianFormula = [2, 2, 2, 1, 2, 2, 1];
    let lydianScale = [];
    for (let i = 0; i < lydianFormula.length; i++) {
        noteIndex = noteIndex + lydianFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        lydianScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Lydian scale.`
    scale.innerHTML = `${note}, ${lydianScale.join(", ")}`
}

function mixolydian() {
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let noteValue = document.getElementById("noteInput").value;
    let note = noteValue.toUpperCase();
    let scale = document.getElementById("Scale");
    let noteIndex = scaleArray.indexOf(note);
    let mixolydianFormula = [2, 2, 1, 2, 2, 1, 2];
    let mixolydianScale = [];
    for (let i = 0; i < mixolydianFormula.length; i++) {
        noteIndex = noteIndex + mixolydianFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        mixolydianScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Mixolydian scale.`
    scale.innerHTML = `${note}, ${mixolydianScale.join(", ")}`
}

function locrian() {
    const heading = document.getElementById("heading");
    const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let noteValue = document.getElementById("noteInput").value;
    let note = noteValue.toUpperCase();
    let scale = document.getElementById("Scale");
    let noteIndex = scaleArray.indexOf(note);
    let locrianFormula = [1, 2, 2, 1, 2, 2, 2];
    let locrianScale = [];
    for (let i = 0; i < locrianFormula.length; i++) {
        noteIndex = noteIndex + locrianFormula[i];
        if (noteIndex > 11) {
            noteIndex = noteIndex - 12;
        }
        locrianScale.push(scaleArray[noteIndex]);
    }
    heading.innerHTML = `${note} Locrian scale.`
    scale.innerHTML = `${note}, ${locrianScale.join(", ")}`
}

// JavaScript for hamburger menu toggle
// JavaScript for hamburger menu toggle
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}

