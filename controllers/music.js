var express = require('express');
var app = express();
var musicRouter = express.Router();

var MusicQuery = require('../client/db/musicQuery');
var query = new MusicQuery;


//music by id
musicRouter.get('/:id', function(req, res){
  res.json(music[req.params.id]);
});

//music index
musicRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  });
});

//update music
musicRouter.put('/:id', function(req, res) {
  var entry = new Music({
    artist: req.body.artist,
    album: req.body.alum
  });
  music[req.params.id] = entry;
  res.json({data: music});
});

//add new music
musicRouter.post('/', function(req, res) {
  var entry = new Music({
     artist: req.body.artist,
     album: req.body.album
  });
  music.push(entry);
  res.json({data: music});
});

//delete music
musicRouter.delete('/:id', function(req, res) {
  music.splice(req.params.id, 1);
  res.json({data: music});
});

module.exports = musicRouter;