
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
      this.noteList.map(function(note) {
      return [
         "</a href= '#notes/'>" + note.text + note.title "</a"
      ].join('')
    }).join('')
  ].join('')
  }
}
