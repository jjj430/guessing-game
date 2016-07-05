var userName = prompt("Hello, May I have your name");
		alert("Nice to meet you " + userName);
		console.log("UserName: " + userName);
		
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
		console.log("Attended Stanford? " + answerUniversity);
		if (answerUniversity.toLowerCase() == "no" || answerUniversity.toLowerCase() == "n"){
		  alert(userName + " you are correct I did not attended Stanford");
		  numberCorr++;
		}
		else {
		  alert("Sorry " + userName + " incorrect. I did not attend Stanford");
		}
		
		var answerDevelop = prompt("Do I want to develop children's software? yes or no");
		console.log("Develop Children's software? " + answerDevelop);
		if (answerDevelop.toLowerCase() == "no" || answerDevelop.toLowerCase() == "n"){
		  alert(userName + " correct. I want to develop mobile apps, not children's software");
		  numberCorr++;
		}
		else {
		  alert("Sorry " + userName + " not correct. I want to develop mobile apps");
		}
		document.write("You answered " + numberCorr + " questions correctly.");
		
		var answerPlay = prompt(userName + " would you like to play a number guessing game? yes or no");
		if (answerPlay.toLowerCase == "yes"){
		  var guess = prompt(userName + " guess a number between 1 and 20");
		  console.log(guess);
		  var answer = 8;
		  if (guess.toLowerCase == answer){
		    alert(userName + " Good job, you guessed it");
		  }
		  else if (guess < answer){
		    alert("Sorry too low.");
		  }
		  else {
		    alert("Sorry too high.");
		  }
		}
		else {
		  alert("Maybe next time we can play");
		}