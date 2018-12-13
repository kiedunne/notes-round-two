
function List(note) {
  this.list = []
  this.note = note
};

  List.prototype = {
    addNote: function() {
      this.list.push(this.note);
    },
    returnList: function() {
      return this.list;
    }
  };
