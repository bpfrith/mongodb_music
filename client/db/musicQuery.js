var MongoClient = require('mongodb').MongoClient;

var MusicQuery = function () {
  this.url = 'mongodb://localhost:27017/music';
};

MusicQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('music');
        collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
        });
      }
    });
  }
}

module.exports = MusicQuery;