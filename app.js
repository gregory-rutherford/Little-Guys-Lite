const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const cors = require("cors");

const mongoose = require("mongoose");
const service = require("feathers-mongoose");

const Model = require("./models/task");
const db = require("./models/index");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/littleGuys", {
  useNewUrlParser: true
});

const app = express(feathers());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set("useFindAndModify", false);

app.configure(express.rest());
