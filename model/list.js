
function NoteList(note) {
  this.list = []
  this.note = note
};

  NoteList.prototype = {
    addNote: function() {
      this.list.push(this.note);
    },
    returnList: function() {
      return this.list;
    }
  };
