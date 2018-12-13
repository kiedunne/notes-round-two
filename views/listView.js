
function ListView(notelist) {
 this.notelist = notelist.list
}

ListView.prototype = {
  renderList: function() {
    return this.noteList.map(function(note) {
      return "<p>" + note + "</p>"
    }).join('')
  }
};
