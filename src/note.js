
(function (exports) {

function Note(text) {
  this.text = text
  id++
  this.id = id
}
// abouve is a constructor funtion- makes an object- in this case not
//when its run //
Note.prototype = {
  title: function(){
    this.text.substring(0,20)
  }
}
exports.Note = Note
})(this)
