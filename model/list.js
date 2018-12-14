
function List() {
  this.list = []
};

  List.prototype = {

    addNote: function(text) {
      var note = new Note(text)
      this.list.push(note);
    },
    note: function(text) {
      this.text = text;
    }
  };
