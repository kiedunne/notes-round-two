// function NoteController(note, list, noteView, listView) {
//   this.note = note
//   this.noteView = noteView
//   this.list = list
//   this.listView = listView

var listView = new ListView();
var list = new List();

window.addEventListener('submit', function(event) {
    newNote();
    updateDOM();

    function newNote() {
      var input = document.getElementById("text-input").value
      noteList.addNote(input);
    };

    function updateDOM() {
      document.getElementById('note-list').innerHTML = listView.renderList()
      document.getElementById("text-input").value = '';
    };
