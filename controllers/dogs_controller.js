// set up the controller for the app, including routes

var express = require("express");
var router = express.Router();


var db = require("../models");
router.get("/", function(req, res) {
  db.dog.findAll({}).then(function(dbdog) {
    var hbsObject = {
      dogs: dbdog
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/dogs", function(req, res) {

  db.dog.create({
      dog_name: req.body.dog_name,
      bought: false
    }).then(function(dbdog) {
      res.json({
        id: result.insertId
      });
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.put("/api/dogs/:id", function(req, res) {
  db.dog.update({
      bought: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbdog) {
      res.json(dbdog);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;