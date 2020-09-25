const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=6caae61751610c4e6297eb66f8712ef7&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  const temp = response.body.current.temperature;
  const feelslike = response.body.current.feelslike;
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      temp +
      " degrees out. It feels like " +
      feelslike +
      " degrees out."
  );
});

const geocodingURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2Fyb2xsaXUxMDIwIiwiYSI6ImNrYzF0Z202NDB3dm0yd29lZjJuM2YwemYifQ.hUUReXyGMR8OF4QxfUh7kQ&limit=1";

request({ url: geocodingURL, json: true }, (error, response) => {
  const lat = response.body.features[0].center[0];
  const long = response.body.features[0].center[1];
  console.log(lat, long);
});

// Geocoding
// Address -> Lat / Long -> weather
