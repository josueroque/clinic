"use strict";

//load library
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.ATLAS_DATABASE_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const con = mongoose.connection;

const User = require("../models/User");

const fs = require("fs");
var process;

// HANDLE CONNECTION ERRORS
con.on("error", (err) => {
  console.log("Error", err);
  process.exit(1);
});

client.connect(async (err) => {
  try {
    const collection = client.db("Clinic").collection("Users");
    // perform actions on the collection object

    await collection.deleteMany();
    await collection.insertMany([
      {
        name: "Josué Roque",
        email: "josueroque@yahoo.com",
        password: User.hashPassword("motagua"),
      },
    ]);

    await con.close();

    console.log("Database initialized succesfully");
    //  server.close();
  } catch (error) {
    console.log(error);
  }
});

mongoose.connect(uri, {
  useNewUrlParser: true,
});
