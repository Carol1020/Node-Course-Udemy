const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6caae61751610c4e6297eb66f8712ef7&query=" +
    latitude +
    "," +
    longtitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find current weather. Try another search");
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degrees out. It feels like " +
          response.body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
