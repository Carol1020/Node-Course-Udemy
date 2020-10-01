const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiY2Fyb2xsaXUxMDIwIiwiYSI6ImNrYzF0Z202NDB3dm0yd29lZjJuM2YwemYifQ.hUUReXyGMR8OF4QxfUh7kQ&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
    }
    callback(undefined, {
      latitude: response.body.features[0].center[0],
      longtitude: response.body.features[0].center[1],
      location: response.body.features[0].place_name,
    });
  });
};

module.exports = geocode;
