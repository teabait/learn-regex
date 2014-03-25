var lesson1Names = [
  {
    name: "Zorg",
    enemy: true,
    killed: false
  },
  {
    name: "Blarog",
    enemy: true,
    killed: false
  },
  {
    name: "Jeffrey",
    enemy: false,
    killed: false
  }
]

// The thing that checks User Submission and runs everything
function checkRegex(userRegex, options, list) {
  $('.flash').show().fadeOut();
  var regex = new RegExp(userRegex, options);
  list.forEach(function(creature){
    var result = creature.name.match(regex);
    if(result == creature.name){
      creature.killed = true;
      $('li[data-id=' + lesson1Names.indexOf(creature) + "]").addClass("killed");
    }
  })
  checkSuccess();
}

// Returns true or false; determines whether user can go on to next lesson
function checkSuccess () {
  var enemiesAlive = _.where(lesson1Names, {enemy: true, killed: false});
  var friendsKilled = _.where(lesson1Names, {enemy: false, killed: true});
  if(enemiesAlive.length + friendsKilled.length === 0) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function(){
  lesson1Names.forEach(function(creature){
    $('.people').append("<li data-id='" + lesson1Names.indexOf(creature) + "' class='enemy-"+ creature.enemy + "'>" + creature.name + "</li>")
  })
  $("#submit").click(function(){
    checkRegex($('#regex').val(), $('#options').val(), lesson1Names);
  });
})
