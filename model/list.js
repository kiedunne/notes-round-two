
function NoteList(note) {
  this.list = []
  this.note = note
};

  NoteList.prototype = {
    add: function() {
      this.list.push(this.note);
    },
    returnList: function() {
      return this.list;
    }
  };
