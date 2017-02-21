var Music = require('./music');

var Music = function() {

}

Music.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  all: function (callback){
    this.makeRequest('http://localhost:3000/api/music', function(){
      if(this.status !== 200) return;
        var jsonString = this.responseText;
        var result = JSON.parse(jsonString);

        callback(result);
    });
  }
}

module.exports = Music;