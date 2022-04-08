let colours = ["blue", "yellow", "green", "pink", "orange", "red", "#fffafa"];

let colourChange = document.getElementById("change");

colourChange.addEventListener("click", function () {
  var randomColour = colours[Math.floor(Math.random() * colours.length)];

  let bodyChange = document.getElementById("body");

  bodyChange.style.background = randomColour;
});

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
