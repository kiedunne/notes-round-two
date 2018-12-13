
function NoteView(note) {
  this.note = note
};

  NoteView.prototype = {
    renderNote: function() {
      return "<p>" + this.note + "</p>"
    },
    clearInput: function() {
      document.getElementById("text-input").value = '';
    }

  };
