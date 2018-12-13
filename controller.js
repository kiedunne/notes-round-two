function NoteController(note, list, noteView, listView) {
  this.note = note
  this.noteView = noteView
  this.list = list
  this.listView = listView

  this.init();
  
};

  NoteController.prototype = {
    init: function() {
      window.addEventListener('submit', function(event) {
        event.preventDefault()

// Make a note in the note model and send it to note view //
        var input = document.getElementById("text-input").value;
        var note = new self.note(input)

// Add the note to the list in the list model and send it to notelist view //
        // var added_note = this.list.addNote();
        // var new_list = added_note.returnList();
        // var rendered_list = this.listView(new_list).renderList();
      })
    },

    updateDOM: function(list) {
      document.getElementById('note-list').innerHTML = this.noteView.renderNote();
    }
  };
