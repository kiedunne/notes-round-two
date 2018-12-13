window.addEventListener("load", function() {
  var note = new Note(),
      noteList = new NoteList(note),
      noteView = new NoteView(),
      noteListView = new NoteListView(noteView),
      controller = new NoteController(noteList, noteListView);
  controller.updateDOM()
});
