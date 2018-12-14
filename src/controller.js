function NoteController(list, listView, noteView) {
  this.list = list
  this.listView = listView
  this.NoteView = noteView
  this.init();

};
  NoteController.prototype = {

    init: function() {
      var self = this

      window.addEventListener('submit', function(event) {
        event.preventDefault()

// Then tell list to create note then render it //
        self.list.createNote(event.target[0].value);
        var html = self.listView.render()
        self.render(html)
      })



      window.addEventListener('hashchange', function() {
        var noteId = window.location.hash.split('#notes/')[1]
        var note = self.list.findById(noteId)
        var noteView = new self.NoteView(note)
        var html = noteView.render()
        self.render(html)
      })
    },

    render: function(html) {
      document.getElementById('note-list').innerHTML = html
    }
  };
