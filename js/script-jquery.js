//////////////////////////// Dark Sky //////////////////////////////////
// https://darksky.net/dev/docs
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// dark sky api - c8afa7ff44a55b460e4bc20e18ecf071
// Lat. 45.394110  Long. -92.814830

// Weather forecast for Center City
"use strict";
// jquery request
(function () {
    var url = "https://api.darksky.net/forecast/c8afa7ff44a55b460e4bc20e18ecf071/45.394110,-92.814830";
    var apiKey = "c8afa7ff44a55b460e4bc20e18ecf071";

    $.get(url)
        .done(function (response) {
            console.log(JSON.stringify(response));
            updateUISuccess(response);
        })
        .catch(function (error) {
            updateUIError();
        });

// handle XHR success
    function updateUISuccess(response) {
        var condition = response.currently.temperature;
        var condition = response.currently.summary;
        var degF = response.currently.temperature;
        var degFInt = Math.floor(degF);
        var dew = response.currently.dewPoint;
        var wind = response.currently.windSpeed;
        var outlook = response.hourly.summary;
        var $weatherBox = $('weather');
        $weatherBox.append("<p>" + "Sky " + condition + "</p><p>" + "Temperature " + degFInt + "&#176; F</p><p>" +
            "Dewpoint " + dew + "&#176; F</p><p>" + "Wind " + wind + "</p><p>" + outlook + "</p>");
    }

// handle XHR error
    function updateUIError() {
        var $weatherBox = $('#weather');
        $weatherBox.addClass('hidden');
    }
})();