const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  descripiton: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;
