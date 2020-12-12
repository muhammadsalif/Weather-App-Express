const express = require("express");
const bodyParser = require("body-parser");

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());

var weather = require('openweather-apis');
var ownKey = "2617c465639f83ad21809927b4a2d0d3"

weather.setAPPID(ownKey);

app.get(/^\/(\zipcode)\/(\d{5})$/, (req, res) => {
    weather.setZipCode(req.params[1]);
    weather.getAllWeather(function (err, JSONObj) {
        console.log(JSONObj);
        res.send(JSONObj)
    });
})

app.listen(port, () => {
    console.log('Express app is listening at the http://localhost:', port)
})