const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: "Andrew",
//   age: 27,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(() => {
//     console.log("Error", error);
//   });

const Task = mongoose.model("Task", {
  descripiton: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task1 = new Task({
  descripiton: "Clean the house",
  completed: true,
});

task1
  .save()
  .then(() => {
    console.log(task1);
  })
  .catch(() => {
    console.log("Error", error);
  });
