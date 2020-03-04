"use strict";

var song = "Redemption Song";
// var input = select('#song-title');

(function () {
    var url = "https://api.lyrics.ovh/v1/Bob Marley/" + song + "";
    // var url = "https://api.lyrics.ovh/v1/Bob Marley/" + input.value(); + "";
    var httpRequest;
    makeRequest();

    // create and send an XHR request
    function makeRequest() {
        // var button = select('#submit');
        // button.mousePressed(makeRequest);
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
        var lyricBox = document.getElementById('lyrics');
        lyricBox.innerHTML = "<p>" + lyrics + "</p>";
    }

    // handle XHR error
    function updateUIError() {
        var lyricsBox = document.getElementById('lyrics');
        lyricsBox.className = "hidden";
    }
})();