var express = require('express');
var entriesRouter = express.Router();
var Entries = require('../client/src/models/entries');
var EntriesQuery = require('../client/db/entriesQuery');
var query = new EntriesQuery;


//music by id
entriesRouter.get('/:id', function(req, res){
  res.json(entries[req.params.id]);
});

//music index
entriesRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  });
});

//update music
entriesRouter.put('/:id', function(req, res) {
  var entry = new Entries({
    artist: req.body.artist,
    album: req.body.album
  });
  entries[req.params.id] = entry;
  res.json({data: entries});
});

//add new music
entriesRouter.post('/', function(req, res) {
  var entry = new Entries({
     artist: req.body.artist,
     album: req.body.album
  });
  entries.push(entry);
  res.json({data: entries});
});

//delete music
entriesRouter.delete('/:id', function(req, res) {
  entries.splice(req.params.id, 1);
  res.json({data: entries});
});

module.exports = entriesRouter;