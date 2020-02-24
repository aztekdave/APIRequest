//////////////////////////// Dark Sky //////////////////////////////////
    // https://darksky.net/dev/docs
    // https://api.darksky.net/forecast/[key]/[latitude],[longitude]
    // dark sky api - c8afa7ff44a55b460e4bc20e18ecf071
    // Lat. 45.394110  Long. -92.814830

"use strict";
// Fetch request
(function() {
        var url = "https://api.darksky.net/forecast/c8afa7ff44a55b460e4bc20e18ecf071/45.394110,-92.814830";
    	var apiKey = "c8afa7ff44a55b460e4bc20e18ecf071"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
        
        fetch(url).then(function(response) {
            if(!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function(response) {
            updateUISuccess(response);
        }).catch(function(error) {
            updateUIError();
        });
        // handle XHR success
    function updateUISuccess(response) {
        // var condition = response.data[0].temperature;
        // var degC = response.main.temp - 273.15;
        // var degCInt = Math.floor(degC);
        var degF = response.data.temperature;
        var degFInt = Math.floor(degF);
        var weatherBox = document.getElementById('weather');
        weatherBox.innerHTML = "<p>" + degFInt + "&#176; F</p>";
        // var condition = response.data[0].temperature;
        // var degC = response.main.temp - 273.15;
        // var degCInt = Math.floor(degC);
        // var degF = degC * 1.8 + 32;
        // var degFInt = Math.floor(degF);
        // var weatherBox = document.getElementById('weather');
        // weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
    }
     // handle XHR error
    function updateUIError() {
        var weatherBox = document.getElementById('weather');
        weatherBox.className = "hidden";
    }
    })();