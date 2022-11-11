var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content
    if (content == "take my selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "Taking Your Selfie In 5 Seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(Camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000)
}


Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});

Camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie' src='" + data_uri + "'>";
    })
}

function save() {
    link = document.getElementById("link");
    img = document.getElementById("selfie").src;
    link.href = img;
    link.click();
}
