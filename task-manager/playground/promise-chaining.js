require("../src/db/mongoose");
const User = require("../src/models/user");

// 5f82b841c2ee11598dfba27f

User.findByIdAndUpdate("5f82c285cc3fa0629171605b", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
