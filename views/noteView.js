
function NoteView(note) {
  this.note = note
};

  NoteView.prototype = {
    renderNote: function() {
      return "<p>" + this.note.text + "</p>"
    }

  };
