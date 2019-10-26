const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const cors = require("cors");

const mongoose = require("mongoose");
const service = require("feathers-mongoose");

const Model = require("./Models/user.js");
const db = require("./Models/index");

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


app.use("/users", service({
    Model,
    lean: false    
}));

app.service("users").create({
    username: "gregorford",
    email: "gregory.rutherford@unt.edu",
    bio: "one cool guy",
    image: "hey now"
}).then(function(user){
    console.log("created user", user)
});

app.use(express.errorHandler());

const port = 3030 || process.env.MONGODB_URI;
app.listen(port, () => {
  console.log(`Feather server listening on port ${port}`);
});