
document.getElementById("btnGiveCommand").style.display = "none"
// const spk = document.getElementById()

document.getElementById("default").addEventListener("click", function () {
    (document.getElementById("default").style.display = "none")
    document.getElementById("btnGiveCommand").style.display = "block"
    setTimeout(() => {
      document.getElementById("btnGiveCommand").style.color = "yellow"   
    }, 1000);
    recognition.start();
    setTimeout(() => {
        textToAudio()
    }, 7000);
})

var message = document.querySelector('#text-to-speech');

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

        var grammar = '#JSGF V1.0;'

        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onresult = function(event) {
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
            message.textContent = command + '.';

            if(command.toLowerCase() === 'select steve'){
                document.querySelector('#chkSteve').checked = true;
            }
            else if (command.toLowerCase() === 'select tony'){
                document.querySelector('#chkTony').checked = true;
            }
            else if (command.toLowerCase() === 'select bruce'){
                document.querySelector('#chkBruce').checked = true;
            }
            else if (command.toLowerCase() === 'select nick'){
                document.querySelector('#chkNick').checked = true;
            }
            
        };

        recognition.onspeechend = function() {
            recognition.stop();
            document.getElementById("btnGiveCommand").style.display = "none"
            document.getElementById("default").style.display = "block"
        };

        recognition.onerror = function(event) {
            message.textContent = 'Error occurred in recognition: ' + event.error;
        }


/* --------------------------------------------- */

/* text to speech */
function textToAudio() {
    let msg = document.getElementById("text-to-speech").innerText;

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    // redirects
    setTimeout(() => {
        if (document.getElementById("text-to-speech").innerText == "hey robot do something for refreshing my mind.") {
            const url = "https://www.youtube.com/watch?v=svthOetNi5k"
            var a = document.createElement('a');
            a.target="_blank";
            a.href=url;
            a.click();
            }
            // fb 
            if (document.getElementById("text-to-speech").innerText == "can you redirect to my Facebook profile.") {
            const url = "https://www.facebook.com/rabby.rahman.96343"
            var a = document.createElement('a');
            a.target="_blank";
            a.href=url;
            a.click();
            }
            // github
            if (document.getElementById("text-to-speech").innerText == "then go to my GitHub.") {
            const url = "https://github.com/Reazour-Rahman"
            var a = document.createElement('a');
            a.target="_blank";
            a.href=url;
            a.click();
            }
            
            // scope
            if (document.getElementById("text-to-speech").innerText == "can you help me to learn about the scope and lexical environment.") {
            const url = "https://www.youtube.com/watch?v=uH-tVP8MUs8"
            var a = document.createElement('a');
            a.target="_blank";
            a.href=url;
            a.click();
            }
            // reload
            if (document.getElementById("text-to-speech").innerText == "ok reload this page.") {
            location.reload()
            }
    }, 2000);
}

/* Refresh */
const refresh = () =>{
    document.getElementById("text-to-speech").textContent = ""
}



          
