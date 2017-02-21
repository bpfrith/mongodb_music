var EntriesDataRequester = require('../models/entriesDataRequester');

var UI = function() {
  var entriesDataRequester = new EntriesDataRequester();
  entries.all(function(result){
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

  render: function(entries) {
    // var container = document.getElementById('entries');
    var container = document.querySelector('#entires');
    entries.forEach(function(entry){
      var li = document.createElement('li');
      this.appendText(li, entry.artist, 'Artist: ');
      this.appendText(li, entry.album, 'Album: ');
    
      container.appendChild(li);
    }.bind(this));
  },
}

module.exports = UI;