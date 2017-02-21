var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/entries', require('./entries'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.get('/collection', function(req, res){
  res.json({data: "Collection"});
})

module.exports = router;