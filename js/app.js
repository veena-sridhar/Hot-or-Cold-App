
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	var guessCount = 0;
	var gameNumber = 0;

	// Starting a new game

	function startGame () {
		guessCount = 0;
		$("#feedback").html ("Make your guess!");
		$("#guessList").html ("");
		gameNumber = Math.floor ( Math.random() * 100 );
	}

	$(".new").click (startGame);

	startGame();

	//guessButton and Feedback functionality

	$("#gameForm").submit (function () {
	    guessCount++;
	    $('#count').html(guessCount);
		var userInputNumber = parseInt ( $("#userGuess").val() );
		if (isNaN (userInputNumber) || userInputNumber < 1 || userInputNumber > 100) {
			$("#feedback").html ("Invalid number: please provide a number between 1 and 100.");
		} else {
			var feedbackBox = $("#feedback");
			var feedbackText = "";
	      if (userInputNumber === gameNumber) {
	      	feedbackText = "YOU WIN!";
	      } else {
			var difference = Math.abs(  gameNumber - userInputNumber );
	   		
	        if (difference >= 50) {
	        	feedbackText = "Ice cold";
	        } else if (difference >= 30 && difference < 50 ) {
	        	feedbackText = "Cold";          
	      	} else if (difference >= 20 && difference < 30 ) {
	        	feedbackText = "Warm";
	        } else if (difference >= 10 && difference < 20 ) {
	        	feedbackText = "Hot";
	        } else if (difference >= 1 && difference < 10) { 
	        	feedbackText = "Very hot";
	        }
	      }
	      $("#feedback").html (feedbackText);
		}
		$('#guessList').append("<li>" + userInputNumber + "</li>");
		$('#userGuess').val('');
		return false;
	});


});
