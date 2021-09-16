
document.getElementById("btnGiveCommand").style.display = "none"

document.getElementById("default").addEventListener("click", function () {
    (document.getElementById("default").style.display = "none")
    document.getElementById("btnGiveCommand").style.display = "block"
    recognition.start();
})

var message = document.querySelector('#message');

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
            message.textContent = 'Voice Input: ' + command + '.';

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
