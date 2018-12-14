
function ListView(notelist) {
 this.noteList = notelist
}

ListView.prototype = {
  render: function() {
    return [
      "<form>",
        "<input type='text'></input>",
        "<input type='submit'></input>",
      "</form>",
      this.noteList.list.map(function(note) {
      return [
        "<div>",
         "<a href= '#notes/", + note.id + "'>" + note.title() + "</a",
         "</div>"
      ].join('')
    }).join('')
  ].join('')
  }

}
