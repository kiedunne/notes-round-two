// ON LOAD- MAKE CONTROLLER RENDER INITAL LIST VIEW
window.addEventListener("load", function() {
  var list = new List(Note),
      listView = new ListView(list),
      controller = new NoteController(list, noteView,listView);
// dont create an instance of note view yet- you'll do that in controller
  var html = ListView.renderList()
  controller.renderList(html)
});
