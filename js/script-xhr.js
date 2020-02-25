//////////////////////////// Dark Sky //////////////////////////////////
    // https://darksky.net/dev/docs
    // https://api.darksky.net/forecast/[key]/[latitude],[longitude]
    // dark sky api - c8afa7ff44a55b460e4bc20e18ecf071
    // Lat. 45.394110  Long. -92.814830

// Weather forecast for Center City
"use strict";

(function() {
	var url = "https://api.darksky.net/forecast/c8afa7ff44a55b460e4bc20e18ecf071/45.394110,-92.814830";
	var apiKey = "c8afa7ff44a55b460e4bc20e18ecf071";
    var httpRequest;
    makeRequest();

// create and send an XHR request
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url);
        responseMethod();
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

// handle XHR success - weather
    function updateUISuccess(responseText) {
        var condition = response.currently.summary;
        var degF = response.currently.temperature;
        var degFInt = Math.floor(degF);
        var dew = response.currently.dewPoint;
        var wind = response.currently.windSpeed;
        var weatherBox = document.getElementById('weather');
        weatherBox.innerHTML = "<p>" + "Sky " + condition + "</p><p>" + "Temperature " + degFInt + "&#176; F</p><p>" + 
        "Dewpoint " + dew + "&#176; F</p><p>" + "Wind " + wind + "</p>";
    }

// handle XHR error
    function updateUIError() {
        var weatherBox = document.getElementById('weather');
        weatherBox.className = "hidden";
    }
})();