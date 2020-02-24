// console.log("Hello World!");
// api.openweathermap.org/data/2.5/weather?zip=94040,us

"use strict";

// jquery request
(function() {
        var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
        var apiKey = "e7b8d08381a600c0298ec5937f2657ad"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
    
    $.get(url + '&appid=' + apiKey).done(function(response) {
        // console.log(response);
        updateUISuccess(response);
    }).fail(function(error) {
        updateUIError();
    });

        // handle XHR success
    function updateUISuccess(response) {
        var condition = response.weather[0].main;
        var degC = response.main.temp - 273.15;
        var degCInt = Math.floor(degC);
        var degF = degC * 1.8 + 32;
        var degFInt = Math.floor(degF);
        var $weatherBox = $('#weather');
        $weatherBox.append("<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
    }
       // handle XHR error
    function updateUIError() {
        var $weatherBox = $('#weather');
        $weatherBox.addClass('hidden');
    }
})();