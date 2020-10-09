// CRUD create Read Update Delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  db.collection("users").insertOne(
    {
      _id: id,
      name: "Vikram",
      age: 29,
    },
    (error, result) => {
      if (error) {
        return console.log("Unable to insert user");
      }
      console.log(result.ops);
    }
  );

  // db.collection("users").insertMany(
  //   [
  //     {
  //       name: "Jen",
  //       age: 28,
  //     },
  //     {
  //       name: "Gunther",
  //       age: 27,
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert documents!");
  //     }
  //     console.log(result.ops);
  //   }
  // );

  // db.collection("documents").insertMany(
  //   [
  //     {
  //       description: "This is document 1.",
  //       completed: true,
  //     },
  //     {
  //       description: "This is document 2.",
  //       completed: tru,
  //     },
  //     {
  //       description: "This is document 3.",
  //       completed: false,
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Invalid document");
  //     }
  //     console.log(result.ops);
  //   }
  // );
});
