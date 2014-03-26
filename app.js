$(function(){

  var currentLesson = 0;
  var transition = false;

  // Check User Submission
  function checkRegex(userRegex, options, list) {
    // $('.flash').show().fadeOut();
    var regex = new RegExp(userRegex, options);
    // Checks to see if User input matches a creature's name
    list.forEach(function(person){
      var result = person.name.match(regex);
      // If there's a match, mark that the creature has been killed and replace its image with dead version
      if(result == person.name){
        person.killed = true;
        var oldSrc = $('li[data-id=' + lessons[currentLesson].people.indexOf(person) + "] img").attr('src');
        var oldSrcRoot = oldSrc.match(/([^]*)\.png/);
        $('li[data-id=' + lessons[currentLesson].people.indexOf(person) + "] img").attr('src', oldSrcRoot[1] + '-dead.png');
      }
    });
    $('.input, .lesson').hide();
    if(checkSuccess()) {
      $('.pass').show();
      $('img').addClass('dead');
      // if(currentLesson === lessons.length - 1){
      //   // $('.enemy-false').addClass('bounce');
      // }
    } else {
      $('.hint').text(lessons[currentLesson].hint);
      $('.fail').show();
      $('img').addClass('animate');
      // If failed or only killed one creature, still reset all to not killed.
      list.forEach(function(person){
        person.killed = false;
      })
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
    $('.input, .lesson').show();
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

    // Update progress text
    $('.progress .total').text(lessons.length);
    $('.progress .current').text("Level " + (currentLesson + 1));

    // Update progress bar
    var width = ((currentLesson + 1) / lessons.length) * 100;
    $('.progress .progress-inner').css('margin-left', width + '%');
    console.log(width);
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

  // Listen for "enter" key press, and checks code
  $('input[type=text]').on('keyup', function(e){
    if (e.keyCode === 13) {
      checkRegex($('#regex').val(), $('#options').val(), lessons[currentLesson].people);
    }
  });

  // Kick off the app by rendering the first lesson
  renderLesson();

});
