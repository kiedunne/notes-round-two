
function NoteView(note) {
  this.note = note
};

  NoteView.prototype = {
    render: function() {
      return [
        "<p>" + this.note.text + "</p>"
      ].join('')
    }
 };
