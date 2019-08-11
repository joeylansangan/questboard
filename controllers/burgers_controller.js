// dependencies
var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

//get router
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    // handlebar object variable
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

// post router
router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      // json parse
      res.json({ id: result.insertId });
    }
  );
});
// put router
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // update burgers
  burger.updateOne({ devoured: req.body.devoured }, condition, function(
    result
  ) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// delete router
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // update burgers
  burger.deleteOne(condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

});
module.exports = router;