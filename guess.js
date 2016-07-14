	/*function getName(){
		  var userName = prompt("Hello, May I have your name");
		  document.write("Nice to meet you " + userName);
		  return userName;  
	  }  
	 
	var userName = getName();
    */
    
	/*
	var counter =0;

	function askQuestion(question, questionNum){
		var response = prompt(question);
		var answer=["yes", "no", "no"];
		if (response.toLowerCase() == answer[questionNum]){
			document.write("<p>Your answer is correct </p>");
			counter++;
		}
		else {
			document.write("<p>Your answer is incorrect </p>");
		}
		
	}
	
	askQuestion("Did I learn from Treehouse.com? yes or no", 0);
	askQuestion("Did I go to Stanford Univeristy? yes or no", 1);
	askQuestion("Do I want to develop children's software? yes or no", 2);
	console.log(counter);
	*/
	
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
			numGuess.innerHTML = "You guessed it in " + numberGuess + " tries";
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
	  
		/* var userName = null;
		getUserName();
		document.write(userName);
		
		function getUserName() {
			var userName = "";
			while((userName.trim() == "") && (userName != null)) {
				userName = prompt("What is your name", "");
			}
			if (userName != null) {
				return  UserName;
			}
			else {
				return "";
			}
		}
		*/
		
		/* var userName = prompt("Hello, May I have your name");
		alert("Nice to meet you " + userName);
		// console.log("UserName: " + userName);
		var numberCorr = 0;
		var answerLearn = prompt("Did I learn from Treehouse.com? yes or no");
		console.log("Learn from Treehouse: " + answerLearn);
		if (answerLearn.toLowerCase() == "yes" || answerLearn.toLowerCase() == "y"){
		   alert(userName + " you are correct. I did learn from Treehouse");
		   numberCorr++;
		}
		else {
		  alert("Sorry " + userName + " incorrect. I did learn from Treehouse");
		}
		
		var answerUniversity = prompt("Did I go to Stanford Univeristy? yes or no");
		// console.log("Attended Stanford? " + answerUniversity);
		if (answerUniversity.toLowerCase() == "no" || answerUniversity.toLowerCase() == "n"){
		  alert(userName + " you are correct I did not attended Stanford");
		  numberCorr++;
		}
		else {
		  alert("Sorry " + userName + " incorrect. I did not attend Stanford");
		}
		
		var answerDevelop = prompt("Do I want to develop children's software? yes or no");
		// console.log("Develop Children's software? " + answerDevelop);
		if (answerDevelop.toLowerCase() == "no" || answerDevelop.toLowerCase() == "n"){
		  alert(userName + " correct. I want to develop mobile apps, not children's software");
		  numberCorr++;
		}
		else {
		  alert("Sorry " + userName + " not correct. I want to develop mobile apps");
		}
		alert("You answered " + numberCorr + " questions correctly.");
		
		
		var answerPlay = prompt( "Would you like to play a number guessing game? yes or no");
		var numberGuesses = 0;
		if (answerPlay.toLowerCase() == "yes" || answerPlay.toLowerCase() == "y"){
		 while (answerPlay.toLowerCase() == "yes" || answerPlay.toLowerCase() == "y"){
		    var guess = prompt("Guess a number between 1 and 20");
		  //console.log(guess);
		    numberGuesses++;
		    var answer = 8;
		    if (guess == answer){
		      alert("Good job, you guessed it");
			  answerPlay = "No";
		    }
		    else if (guess < answer){
		      alert("Sorry too low.");
			  answerPlay = prompt("Do you want to keep guessing? yes or no");
		    }
		    else {
		      alert("Sorry too high.");
			//guess = prompt("Do you want to play again? yes or no");
			  answerPlay = prompt("Do you want to keep guessing? yes or no");
		    }
		 }
		 alert("You guess it in " + numberGuesses + " guesses.");
		}
		 
		else {
		 alert("Maybe next time we can play");
		}  */