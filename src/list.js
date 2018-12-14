
function List(note) {
  this.list = []
  this.note = note
};

  List.prototype = {

    createNote: function(text) {
      var note = new this.note(text)
      this.list.push(note);
    },

    findById: function(id) {
      return this.notes.find(function(note) {
        return note.id == id
      })
    }
  };
