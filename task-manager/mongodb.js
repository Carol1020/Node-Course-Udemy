// CRUD create Read Update Delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  // db.collection("users").findOne(
  //   { _id: new ObjectID("5f7fd5fb1f1e8c053187dd11") },
  //   (error, user) => {
  //     if (error) {
  //       return console.log("Unable to fetch");
  //     }
  //     console.log(user);
  //   }
  // );

  // db.collection("users")
  //   .find({ age: 26 })
  //   .toArray((error, users) => {
  //     console.log(users);
  //   });

  // db.collection("users")
  //   .find({ age: 26 })
  //   .count((error, count) => {
  //     console.log(count);
  //   });

  // db.collection("documents").findOne(
  //   {
  //     _id: new ObjectID("5f7fd193479db8ffd1735c19"),
  //   },
  //   (error, result) => {
  //     console.log(result);
  //   }
  // );

  // db.collection("documents")
  //   .find({ completed: true })
  //   .toArray((error, result) => {
  //     console.log(result);
  //   });

  db.collection("users")
    .updateOne(
      {
        _id: new ObjectID("5f7fcb54d15921f9062c3db2"),
      },
      {
        $inc: {
          age: 1,
        },
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
