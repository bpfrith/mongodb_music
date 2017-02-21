var Music = require('../models/music');

var UI = function() {
  var entry = new Music();
  music.all(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {

  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(music) {
    var container = document.getElementById('music');

    for (var entry of music) {
      var li = document.createElement('li');
      this.appendText(li, music.artist, 'Artist: ');
      this.appendText(li, music.album, 'Album: ');
    
      container.appendChild(li);
    }
  }
}

module.exports = UI;