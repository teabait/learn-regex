$(function(){

  var currentLesson = 0;
  var transition = false;

  // The thing that checks User Submission and runs everything
  function checkRegex(userRegex, options, list) {
    $('.flash').show().fadeOut();
    var regex = new RegExp(userRegex, options);
    list.forEach(function(person){
      var result = person.name.match(regex);
      if(result == person.name){
        person.killed = true;
        var oldSrc = $('li[data-id=' + lessons[currentLesson].people.indexOf(person) + "] img").attr('src');
        $('li[data-id=' + lessons[currentLesson].people.indexOf(person) + "] img").attr('src', oldSrc + '-dead.png');
      }
    });
    $('.input').hide();
    if(checkSuccess()) {
      $('.pass').show();
    } else {
      $('.fail').show();
    }
    setTimeout(function(){transition = true},100);
  }

  // Returns true or false; determines whether user can go on to next lesson
  function checkSuccess() {
    var enemiesAlive = _.where(lessons[currentLesson].people, {enemy: true, killed: false});
    var friendsKilled = _.where(lessons[currentLesson].people, {enemy: false, killed: true});
    if(enemiesAlive.length + friendsKilled.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // Render a lesson stage
  function renderLesson() {
    var lesson = lessons[currentLesson];
    $('.lesson-title').text(lesson.title);
    $('.lesson-instructions').html(lesson.instructions);
    $('.people').empty();
    $('.input').show();
    $('.after').hide();
    $('input[type=text]').val('');
    $('#regex').focus();
    lesson.people.forEach(function(person){
      var el = '<li data-id="'+lesson.people.indexOf(person)+'" class="person enemy-'+person.enemy+'">';
      el += '<img src="'+person.img+'.png">';
      el += '<br><span class="person-name">'+person.name+'</span>';
      el += '</li>';
      $('.people').append(el);
    });
  }

  function renderNextLesson() {
    if (checkSuccess()) {
      currentLesson += 1;
    }
    transition = false;
    renderLesson();
  }

  // Move on to next lesson or try again
  $('body').on('keyup', function(e) {
    if (transition && e.keyCode === 13) {
      renderNextLesson();
    }
  });

  // Check the code when someone presses "enter"
  $('input[type=text]').on('keyup', function(e){
    if (e.keyCode === 13) {
      checkRegex($('#regex').val(), $('#options').val(), lessons[currentLesson].people);
    }
  });

  // Kick off the app by rendering the first lesson
  renderLesson();

});
