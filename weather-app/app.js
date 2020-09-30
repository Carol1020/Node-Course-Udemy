const request = require("request");
const geocode = require("./utils/geocode");

// const url =
//   "http://api.weatherstack.com/current?access_key=6caae61751610c4e6297eb66f8712ef7&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location.");
//   } else {
//     const temp = response.body.current.temperature;
//     const feelslike = response.body.current.feelslike;
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         temp +
//         " degrees out. It feels like " +
//         feelslike +
//         " degrees out."
//     );
//   }
// });

// Geocoding
// Address -> Lat / Long -> weather

// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

// const geocodingURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2Fyb2xsaXUxMDIwIiwiYSI6ImNrYzF0Z202NDB3dm0yd29lZjJuM2YwemYifQ.hUUReXyGMR8OF4QxfUh7kQ&limit=1";

// request({ url: geocodingURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to Mapbox.");
//   } else if (response.body.features[0].length === 0) {
//     console.log("Unable to find location.");
//   } else {
//     const lat = response.body.features[0].center[0];
//     const long = response.body.features[0].center[1];
//     console.log(lat, long);
//   }
// });

geocode("Boston", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
