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

// Goal: Print a small forecast to the user
// 1. Print: "It is currently 9 degrees out. It feels like 5 degrees out."
// 2. Test your work!
