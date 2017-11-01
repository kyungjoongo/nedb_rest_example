var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/kyungjoon', function(req, res, next) {
    res.render('kyungjoon', { title: '고경준 천재님이십니다sdlfksdlfkdklf' });
});


module.exports = router;
