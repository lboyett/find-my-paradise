var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ "index page": "index" });
});

router.post("/form-data", (req, res, next) => {
  console.log(req.body.headers);
  res.json(req.body.headers);
});

module.exports = router;
