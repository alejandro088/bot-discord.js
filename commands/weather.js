const config = require("../config.json");
const request = require('request');

exports.run = (client, message, [...city]) => {

    let cityw = city.join(' ');
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityw}&appid=${config.weatherApiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
            message.channel.send(error);
        } else {
            console.log('body:', body);

            let weather = JSON.parse(body);

            let msg = `It's ${weather.main.temp} degrees in ${weather.name}!`;

            message.channel.send(msg);
        }
    });

}

exports.help = {
    name: 'Weather',
    desc: 'View Weather of a city',
    usage: `weather city, example: ${config.prefix}weather Mar del Plata`
}