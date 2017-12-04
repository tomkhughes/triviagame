//Start game using start game button on first page
//create questions array with values and answerList to compare with for loop 

//Time Remaining starts after start button clicked. 
//when answer is clicked, it tells us if it is correct or incorrect
//when answer i clicked after correct or incorrect we move to next question. use small timeout to move to next page
//incorrect can tell us what the correct anwer was 
//if time remaining hits 0 move to reults page


//gliobal variables
var intervalId;
var clockRunning = false;
var correct=0;
var incorrect=0;
var questions = 0;

window.onload = function() {
  $('.timer-container').show();
  $('.question-container').hide();
  $('.score-container').hide();
  $('.message-container').hide();

  $('.start-game').on('click', function() {
    stopwatch.start();
  })
};

var stopwatch = {

  time: 30,
  
  start: function() {
    $('.question-container').show();
    $('.timer-container').hide();
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },

  count: function() {
    stopwatch.time--;
    var converted = stopwatch.timeConverter(stopwatch.time);
    $("#timer").text(converted);
    if (stopwatch.time === 0) {
      console.log("Time's up!");
      clearInterval(intervalId);
    $('.score-container').show();
    $('.question-container').hide(); 
    $('.message-container').hide();
    }
  },

  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

$('.answerButton').on('click', function(){
  if ($(this).val() === 'true') {
    $('.right-message').text('CORRECT!').fadeIn().delay(2000).fadeOut().css({ 'color': 'green', 'font-size': '20px','font-weight': 'bold' });
    $('.question-container').fadeOut().delay(2000).fadeIn();
    console.log($(this).html() + ' correct answer');
    $('.message-container').show();
    correct++;
    scoreCounter();

  }  

  if ($(this).val() === "false") {
    $('.wrong-message').text('WRONG!').fadeIn().delay(2000).fadeOut().css({ 'color': 'red', 'font-size': '20px','font-weight': 'bold' });
    $('.question-container').fadeOut().delay(2000).fadeIn();
    $('.message-container').show();
    incorrect++;
    console.log($(this).html() + ' wrong answer');
    scoreCounter();

  }

});

function scoreCounter() {
    questions++;
    console.log('question count' + questions);
    $('.timeUp').text('Time is up!');
    $('.correct-answer').text('Correct Answers: ' + correct);
    $('.incorrect-answer').text('Incorrect Answers: ' + incorrect);

  };

$('.playAgain').on('click', function() {
  location.reload();
})


$( document ).ready(function() {
   
});



