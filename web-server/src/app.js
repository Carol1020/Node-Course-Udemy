const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

//
// Goal: Create two more HTML files
//
// 1. Create a html page for about with "About" title
// 2. Create a html page for  help with "Help" title
// 3. Remove the old route  handlers for both
// 4. Visit both in the browser to test your work

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Carol Liu",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Carol Liu",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "I need help.",
  });
});

app.get("/weather", (req, res) => {
  res.send();
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
