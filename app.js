window.addEventListener("load", function() {
  var note = new Note(),
      list = new NoteList(note),
      noteView = new NoteView(note),
      listView = new ListView(list),
      controller = new NoteController(note, list, noteView,listView);
      console.log(noteView)
      console.log(listView)
  controller.updateDOM()
});
