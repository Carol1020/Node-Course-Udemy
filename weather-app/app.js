const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=6caae61751610c4e6297eb66f8712ef7&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
