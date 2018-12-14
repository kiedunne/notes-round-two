function NoteController(list, noteView, listView) {
  this.list = list
  this.listView = listView
  this.NoteView = noteView
  this.init();

};
  NoteController.prototype = {

    init: function() {
      // so we can reference the note controller here
      var self = this
      var input = document.getElementById("text-input");
      window.addEventListener('submit', function(event) {
        event.preventDefault()
// Then tell list to create note then render it //
        self.list.createNote(input);
        var html = self.listView.render()
        self.render(html)
      })
      window.addEventListener('hashchange', function() {
        //get hash location
        //find id
        //find note from notelist
        //create noteview
        //render the noteView
        var noteId = window.location.hash.split('#notes/')[1]
        var note = self.list.findById(noteId)
        var noteView = new self.NoteView(note)
        var html = noteView.render()
        self.render(html)
      })
    },

    render: function(html) {
      document.getElementById('note-list').innerHTML = html
      document.getElementById("text-input").value = '';
    }
  };
