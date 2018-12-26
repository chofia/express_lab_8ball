var express = require('express');
var router = express.Router();

let adverbs = ["expressly", "explicitly", "definitely"];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    adverb: adverbs[Math.floor(Math.random() * 3)],
    isAwesome: true
  });
});

router.get('/about_me', function(req, res, next) {
  // res.render('index', { title: 'Angular' });
  res.send("this page is about me!")
});

module.exports = router;
