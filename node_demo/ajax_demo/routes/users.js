var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({
    name: "Dave",
    age: 42
  });
});

module.exports = router;
