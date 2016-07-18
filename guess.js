/*	function getName(){
		  var userName = prompt("Hello, May I have your name");
		  var greet = document.getElementById("greeting");
			greet.innerHTML = "Nice to meet you " + userName;
		  //document.write("Nice to meet you " + userName);
		  return userName;  
	  }  
	 
	var userName = getName();
*/
    
	var counter =0;

	function askQuestion(question, questionNum){
		var response = prompt(question);
		var answer=["yes", "no", "no"];
		if (response.toLowerCase() == answer[questionNum]){
			// document.write("<p>Your answer is correct </p>");
			var correct = document.getElementById("answer");
			correct.style.backgroundColor="green";
			correct.innerHTML = "Your answer is correct.";
			counter++;
		}
		else {
			// document.write("<p>Your answer is incorrect </p>");
			var incorrect = document.getElementById("answer");
			incorrect.style.backgroundColor="red";
			incorrect.innerHTML = "Your answer is incorrect";
		}
		
	}
	
	askQuestion("Did I learn from Treehouse.com? yes or no", 0);
	askQuestion("Did I go to Stanford Univeristy? yes or no", 1);
	askQuestion("Do I want to develop children's software? yes or no", 2);

	var count = document.getElementById("sumOfCorrect");
	count.style.backgroundColor="pink";
	count.innerHTML = "You got " + counter + " correct.";
	

	
	var countGuess = 0;
	var guess = 0;
	var answerPlay = "yes";
	var numberGuess = 0;
	function numberGame() {
	  var answerPlay = prompt( "Would you like to play a number guessing game? yes or no");
	  
	  while((answerPlay == "yes") || (answerPlay == "y")) {
	  var guess = prompt("What number, between 1 and 20, am I thinking of? ");
	  numberGuess++;
      var correctNumber = 11;
	  if (guess == correctNumber){   // if guess correct 
		  //document.write("<p>You are correct</p>");
            var answer = document.getElementById("ans");
			answer.innerHTML = "Yah, you are correct. Good job.";
			// console.log("guess is " + guess);
			var numGuess = document.getElementById("numberOfGuess");
			numGuess.innerHTML = "You guessed it in " + numberGuess + " tries.";
			answerPlay = "no";
		  
	  }
	  else if (correctNumber < guess) {  // if guess is too high
		  //document.write("<p>Too High, try again</p>");
		  var answer = document.getElementById("ans");
			answer.innerHTML = "Sorry you are incorrect. Your answer is too high";
		  var answerPlay = prompt("Do you want to you want to keep playing? yes or no ");
		  
		  }
	  
	  else {     // if guess is too low
		  // document.write("<p>Too Low, try again</p>");
		  var answer = document.getElementById("ans");
			answer.innerHTML = "Sorry you are incorrect. Your answer is too low \n";
          var answerPlay = prompt("Do you want to keep playing? yes or no");
		   
	  }
	 }
	}
		
	numberGame();
