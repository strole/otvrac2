var express = require("express");
var router = express.Router();
require("dotenv").config();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home Page" });
});

router.get("/datatable", function (req, res, next) {
  res.render("datatable", { title: "Datatable" });
});

router.get("/csv", function (req, res) {
  res.render("Boatscsv");
});

router.get("/json", function (req, res) {
  res.render("Boatsjson");
});

router.get("/boats", async function (req, res) {
  var Boat = require("../model/Boat");
  var mongoose = require("mongoose");
  mongoose.connect(process.env.mongoURI);
  await Boat.find({}, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      //console.log(data);
      res.send(data);
    }
  }).clone();
});

router.get("/feedTBL", function (req, res, next) {});

module.exports = router;
