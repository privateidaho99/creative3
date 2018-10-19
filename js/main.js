function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

class TodoItem {
  constructor(title){
    this.title = title;
    this.completed = false;
    this.id = guid();
  }
}

function updateView(){
  var list = $('#list')
  list.html('')
  items.forEach((x)=> {
    var newItem = $("#item-template").clone().show()
    newItem.attr('id', x.id)
    newItem.find('.item-title').html(x.title)
    check = newItem.find('.checkbox')
    if (!x.completed) {
      check.addClass('fa-square')
    }
    else {
      check.addClass('fa-check-square')
      newItem.addClass('checked')
    }
    list.append(newItem)
  })
}

function trash(el){
  items.forEach((x, i)=>{
    if (x.id == $(el).parent().attr('id')){
      items.splice(i, 1)
    }
  })
  updateView();
}

function complete(el){
  items.forEach((x, i)=>{
    if (x.id == $(el).parent().attr('id')){
      items[i].completed = !items[i].completed
      console.log(items[i])
    }
  })
  updateView();
}

var items = []

function addNew(){
  var title = $('#title-input')
  if (title.val().length) {
    items.push(new TodoItem(title.val()))
    title.val('')
    title.focus()
    updateView()
  }
}

$( document ).ready(function() {
  $("#submit").click(function(){
    addNew()
  })
  $('#title-input').on('keyup', function (e) {
    if (e.keyCode == 13) {
      addNew()
    }
  })
});

