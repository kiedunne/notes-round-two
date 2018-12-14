// ON LOAD- MAKE CONTROLLER RENDER INITAL LIST VIEW
window.addEventListener("load", function() {
  var list = new List(Note)
  var listView = new ListView(list)
  var controller = new NoteController(list, listView, NoteView);
// dont create an instance of note view yet- you'll do that in controller
  var html = listView.render()
  controller.render(html)
});
