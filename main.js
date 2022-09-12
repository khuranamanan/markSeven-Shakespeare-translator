var txtinput = document.querySelector("#txt-input");
var btntranslate = document.querySelector(".btn-translate");
var txtoutput = document.querySelector(".txt-output");

var url = "	https://api.funtranslations.com/translate/shakespeare.json";

function urlbuilder(text){
    return url + "?" + "text=" + text;
}

function errorhandler(){
    alert("Something wrong with server try that again");
}

function eventhandler(){
    var inputtxt = txtinput.value;
    fetch(urlbuilder(inputtxt))
    .then(response => response.json())
    .then(json => {
        var translatedtxt = json.contents.translated;
        txtoutput.innerText = translatedtxt;
    })
    .catch(errorhandler);
}

btntranslate.addEventListener('click', eventhandler);