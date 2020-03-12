"use strict";

var song = "Redemption Song";
// var input = select('#song-title'); // search


(function () {
    var url = "https://api.lyrics.ovh/v1/Bob Marley/" + song + "";
    // var button = select('#submit'); // search
    // button.mousePressed(makeRequest); // search
    // var url = "https://api.lyrics.ovh/v1/Bob Marley/" + input.value + ""; // search
    var httpRequest;
    makeRequest();

    // create and send an XHR request
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    // handle XHR response
    function responseMethod() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                updateUISuccess(httpRequest.responseText);

            } else {
                updateUIError();
            }
            console.log(httpRequest.responseText);
        }
    }

    // handle XHR success
    function updateUISuccess(responseText) {
        var response = JSON.parse(responseText);
        var lyrics = response.lyrics;
        const regex = /\n/g;
        lyrics = lyrics.replace(regex, '<br/>');
        var lyricBox = document.getElementById('lyrics');
        lyricBox.innerHTML = "<p>" + lyrics + "</p>";
    }

    // handle XHR error
    function updateUIError() {
        var lyricsBox = document.getElementById('lyrics');
        lyricsBox.className = "hidden";
    }
})();