//////////////////////////// Dark Sky //////////////////////////////////
    // https://darksky.net/dev/docs
    // https://api.darksky.net/forecast/[key]/[latitude],[longitude]
    // dark sky api - c8afa7ff44a55b460e4bc20e18ecf071
    // Lat. 45.394110  Long. -92.814830

// Weather forecast for Center City
"use strict";

(function() {
    // Weather for Center City
	var url = "https://api.darksky.net/forecast/c8afa7ff44a55b460e4bc20e18ecf071/45.394110,-92.814830";
	var apiKey = "c8afa7ff44a55b460e4bc20e18ecf071";
    var httpRequest;
    makeRequest();

    // create and send an XHR request
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url + '&appid=');
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
        var response = JSON.parse(responseText);
        var condition = response.temperature;
        // var degC = response.main.temp - 273.15;
        // var degCInt = Math.floor(degC);
        var degF = response.temperature;
        var degFInt = Math.floor(degF);
        var weatherBox = document.getElementById('weather');
        weatherBox.innerHTML = "<p>" + degFInt + "&#176; F</p>";
    }

    // handle XHR error
    function updateUIError() {
        var weatherBox = document.getElementById('weather');
        weatherBox.className = "hidden";
    }
})();