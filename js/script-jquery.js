//////////////////////////// Dark Sky //////////////////////////////////
    // https://darksky.net/dev/docs
    // https://api.darksky.net/forecast/[key]/[latitude],[longitude]
    // dark sky api - c8afa7ff44a55b460e4bc20e18ecf071
    // Lat. 45.394110  Long. -92.814830

// Weather forecast for Center City
"use strict";
// jquery request
(function() {
        var url = "https://api.darksky.net/forecast/c8afa7ff44a55b460e4bc20e18ecf071/45.394110,-92.814830";
        var apiKey = "c8afa7ff44a55b460e4bc20e18ecf071";
    
    $.get(url)
    .done(function(response) {
        console.log(JSON.stringify(response.body));
        // updateUISuccess(response);
    })
    .catch(function(error) {
        updateUIError();
    });

        // handle XHR success
    function updateUISuccess(response) {
        var condition = response.data[0].temperature;
        // var degC = response.main.temp - 273.15;
        // var degCInt = Math.floor(degC);
        var degF = response.data.temperature;
        var degFInt = Math.floor(degF);
        var $weatherBox = $('weather');
        $weatherBox.append("<p>" + degFInt + "&#176; F</p>");

        // var degF = degC * 1.8 + 32;
        // var degFInt = Math.floor(degF);
        // var $weatherBox = $('#weather');
        // $weatherBox.append("<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
    }
       // handle XHR error
    function updateUIError() {
        var $weatherBox = $('#weather');
        $weatherBox.addClass('hidden');
    }
})();