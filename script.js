const synth = new Tone.Synth().toDestination();

let color = "blue"

document.getElementById("colorPiano").onclick = function() {
    if (color === "blue") {
      color = "pink";
      document.getElementById("colorPiano").style.backgroundColor = "blue"
      document.getElementById("colorPiano").innerHTML = "Blue Piano"
    } else {
      color = "blue";
      document.getElementById("colorPiano").style.backgroundColor = "pink"
      document.getElementById("colorPiano").innerHTML = "Pink Piano"
    };

    document.getElementById("pianoBackground").style.backgroundColor = color;
  };

c = "4"

let sustainTime = "15n";

document.getElementById("sustain").onclick = function() {
    if (sustainTime === "15n") {
        sustainTime = "4n";
        document.getElementById("sustain").style.backgroundColor = "lightgreen"
    } else {
        sustainTime = "15n";
        document.getElementById("sustain").style.backgroundColor = "lightsteelblue"
    }};

document.getElementById("c").onclick = function() {
    synth.triggerAttackRelease("C4", sustainTime);
  };

  document.getElementById("c#").onclick = function() {
    synth.triggerAttackRelease("C#4", sustainTime);
  };

  document.getElementById("d").onclick = function() {
    synth.triggerAttackRelease("D4", sustainTime);
  };

  document.getElementById("d#").onclick = function() {
    synth.triggerAttackRelease("D#4", sustainTime);
  };

  document.getElementById("e").onclick = function() {
    synth.triggerAttackRelease("E4", sustainTime);
  };

  document.getElementById("f").onclick = function() {
    synth.triggerAttackRelease("F4", sustainTime);
  };

  document.getElementById("f#").onclick = function() {
    synth.triggerAttackRelease("F#4", sustainTime);
  };

  document.getElementById("g").onclick = function() {
    synth.triggerAttackRelease("G4", sustainTime);
  };

  document.getElementById("g#").onclick = function() {
    synth.triggerAttackRelease("G#4", sustainTime);
  };

  document.getElementById("a").onclick = function() {
    synth.triggerAttackRelease("A4", sustainTime);
  };

  document.getElementById("a#").onclick = function() {
    synth.triggerAttackRelease("A#4", sustainTime);
  };

  document.getElementById("b").onclick = function() {
    synth.triggerAttackRelease("B4", sustainTime);
  };


