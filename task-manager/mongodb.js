// CRUD create Read Update Delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  // db.collection("users").insertOne(
  //   {
  //     name: "Carol",
  //     age: 26,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert user");
  //     }
  //     console.log(result.ops);
  //   }
  // );

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

  db.collection("documents").insertMany(
    [
      {
        description: "This is document 1.",
        completed: true,
      },
      {
        description: "This is document 2.",
        completed: tru,
      },
      {
        description: "This is document 3.",
        completed: false,
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("Invalid document");
      }
      console.log(result.ops);
    }
  );
});
