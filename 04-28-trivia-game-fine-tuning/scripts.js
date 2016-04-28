
// Trivia game Psuedo Code

// Welcome Page with msg "Welcome to Trivia"
// Directions?
// Three strikes and you lose.
// The user should type their name.
// When user clicks button to submit their name the first question appears

$(document).ready(function() {

  var playerName = '';
  var playerAnswer1 = '';
  var playerAnswer2 = '';
  var playerAnswer3 = '';
  var playerAnswer4 = '';
  var playerAnswer5 = '';
  var answer1 = 'more questions'
  var answer2 = 'asgore dreemurr'
  var answer3 = 'metal & magic'
  var answer4 = '32.058 minutes'
  var answer5 = '30'
  var correctCounter = 0;
  var triesLeft = 5

  // Hide Player Name
  $('#dashboard').hide();
  $('.question').hide();
  $('.correct-msg').hide();
  $('.incorrect-msg').hide();
  $('#lose-game-msg').hide();
  $('#win-game-msg').hide();

  /********************************************************
  Dashboard / Welcome Screen
  ********************************************************/

  // Allow user to type name immediately on page load
  $('#player-name').focus();

    // When user submits name, welcome screen disappears
  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#dashboard').show().addClass('animated fadeIn');
    $('#question1').show().addClass('animated fadeIn').focus();
  };

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
    $('#welcome-screen').addClass('animated fadeOut');
    $('#tries-left').text(triesLeft);
    setTimeout(removeWelcomeScreen, 1000);
  });

  /********************************************************
  QUESTION 1
  ********************************************************/

  // Store answer 1
  $('#question1-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer1 = $('#input-question1').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer1
    console.log('The players answer for question 1 is ' + playerAnswer1);
    // showPlayerAnswer1(); // This first showPlayerAnswer1 function
    answerCheck1();
  });

  // Show answers
  function showPlayerAnswer1() {
    $('#show-player-answer1').text(playerAnswer1);
    $('#correct-answer1').text(answer1)
  };

  // Fade out answer check message
  function fadeOutAnswerCheckMsg() {
    $('#incorrect-msg1').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion1() {
    $('#question1').addClass('animated fadeOut');
    setTimeout($('#question1').detach(), 2500);
    $('#question2').show().addClass('animated fadeIn');
  };

  function triesLeftCountdown() {
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question').addClass('animated fadeOut');
      $('.question').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn')
    };
    $('#replay-btn').on('click', function() {
      console.log('replay-btn function fired');
      location.reload();
    });
  };


  function answerCheck1() {
    // If player gets question right...
    if(playerAnswer1 === answer1) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion1, 2500);
    }
    else {
      // If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      triesLeftCountdown();
      setTimeout(fadeOutAnswerCheckMsg, 2500);
      $('#input-question1').val('');
    }
  };

  /********************************************************
  QUESTION 2
  ********************************************************/

  // Store answer 2
  $('#question2-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer2 = $('#input-question2').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer1
    console.log('The players answer for question 2 is ' + playerAnswer2);
    // showPlayerAnswer1(); // This first showPlayerAnswer1 function
    answerCheck2();
  });

  // Show answers
  function showPlayerAnswer2() {
    $('#show-player-answer2').text(playerAnswer2);
    $('#correct-answer2').text(answer2)
  };

  // Fade out answer check message
  function fadeOutAnswerCheckMsg() {
    $('#incorrect-msg2').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion2() {
    $('#question2').addClass('animated fadeOut');
    setTimeout($('#question2').detach(), 2500);
    $('#question3').show().addClass('animated fadeIn');
  };

  function answerCheck2() {
    // If player gets question right...
    if(playerAnswer2 === answer2) {
      console.log("Player's answer is correct!");
      $('#correct-msg2').show().addClass('animated fadeIn');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion2, 2500);
    }
    else {
      // If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg2').show().addClass('animated fadeIn');
      setTimeout(fadeOutAnswerCheckMsg, 2500);
      $('#input-question2').val('');
    }
  };

 /********************************************************
  QUESTION 3
  ********************************************************/

  // Store answer 3
  $('#question3-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer3 = $('#input-question3').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer1
    console.log('The players answer for question 3 is ' + playerAnswer3);
    // showPlayerAnswer1(); // This first showPlayerAnswer1 function
    answerCheck3();
  });

  // Show answers
  function showPlayerAnswer3() {
    $('#show-player-answer3').text(playerAnswer3);
    $('#correct-answer3').text(answer3)
  };

  // Fade out answer check message
  function fadeOutAnswerCheckMsg() {
    $('#incorrect-msg3').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion3() {
    $('#question3').addClass('animated fadeOut');
    setTimeout($('#question3').detach(), 2500);
    $('#question4').show().addClass('animated fadeIn');
  };

  function answerCheck3() {
    // If player gets question right...
    if(playerAnswer3 === answer3) {
      console.log("Player's answer is correct!");
      $('#correct-msg3').show().addClass('animated fadeIn');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion3, 2500);
    }
    else {
      // If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg3').show().addClass('animated fadeIn');
      setTimeout(fadeOutAnswerCheckMsg, 2500);
      $('#input-question3').val('');
    }
  };

  /********************************************************
  QUESTION 4
  ********************************************************/

  // Store answer 4
  $('#question4-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer4 = $('#input-question4').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer1
    console.log('The players answer for question 4 is ' + playerAnswer4);
    // showPlayerAnswer1(); // This first showPlayerAnswer1 function
    answerCheck4();
  });

  // Show answers
  function showPlayerAnswer4() {
    $('#show-player-answer4').text(playerAnswer4);
    $('#correct-answer4').text(answer4)
  };

  // Fade out answer check message
  function fadeOutAnswerCheckMsg() {
    $('#incorrect-msg4').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion4() {
    $('#question4').addClass('animated fadeOut');
    setTimeout($('#question4').detach(), 2500);
    $('#question5').show().addClass('animated fadeIn');
  };

  function answerCheck4() {
    // If player gets question right...
    if(playerAnswer4 === answer4) {
      console.log("Player's answer is correct!");
      $('#correct-msg4').show().addClass('animated fadeIn');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion4, 2500);
    }
    else {
      // If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg4').show().addClass('animated fadeIn');
      setTimeout(fadeOutAnswerCheckMsg, 2500);
      $('#input-question4').val('');
    }
  };


/********************************************************
  QUESTION 5
  ********************************************************/

  // Store answer 5
  $('#question5-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer5 = $('#input-question5').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer1
    console.log('The players answer for question 5 is ' + playerAnswer5);
    // showPlayerAnswer1(); // This first showPlayerAnswer1 function
    answerCheck5();
  });

  // Show answers
  function showPlayerAnswer5() {
    $('#show-player-answer5').text(playerAnswer5);
    $('#correct-answer5').text(answer5)
  };

  // Fade out answer check message
  function fadeOutAnswerCheckMsg() {
    $('#incorrect-msg5').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion5() {
    $('#question5').addClass('animated fadeOut');
    setTimeout($('#question5').detach(), 2500);
    $('#win-game-msg').show().addClass('animated fadeIn');
  };

  function answerCheck5() {
    // If player gets question right...
    if(playerAnswer5 === answer5) {
      console.log("Player's answer is correct!");
      $('#correct-msg5').show().addClass('animated fadeIn');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion5, 2500);
    }
    else {
      // If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg5').show().addClass('animated fadeIn');
      setTimeout(fadeOutAnswerCheckMsg, 2500);
      $('#input-question5').val('');
    }
  };

}); // ready function ends
