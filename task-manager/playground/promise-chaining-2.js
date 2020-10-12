const { findByIdAndDelete } = require("../src/models/task");

require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5f82a9157f73d54882635c2d")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completeed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
