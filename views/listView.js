
function ListView() {

};

ListView.prototype = {

  renderList: function() {
    var html = '';
    for (note in noteList)  
    this.noteList.map(function(note) {
      return "<p>" + note + "</p>"
    }).join('')
  }
};
