var trivia =
[
	{
		question:"Who is this Spiderman villain?",
		answers: ["Green goblin", "Venom", "Killer Croc", "Menace"],
		correctAnswer: "Green goblin",
		image: "green-goblin.jpg"
	},
	{
		question:"Who is this Thor villain?",
		answers: ["Heimdall", "Loki", "Destroyer", "Malekith"],
		correctAnswer: "Loki",
		image: "loki.jpg"
	},
	{
		question:"Who is this X-men villain?",
		answers: ["Sentinel", "Weapon-X", "The Leader", "Magneto"],
		correctAnswer: "Magneto",
		image: "magneto.jpg"
	},
	{
		question:"Who is this Spiderman villain?",
		answers: ["Dr.Octopus", "Whiplash", "Sinister", "Klaw"],
		correctAnswer: "Dr.Octopus",
		image: "dr-oct.jpg"
	},
	{
		question:"Who is this Fantastic Four villain?",
		answers: ["Sauron", "Epoch", "Thanos", "Galactus"],
		correctAnswer: "Galactus",
		image: "galactus.jpg"
	},
	{
		question:"Who is this Captain America villain?",
		answers: ["Hate Monger", "Red Hood", "Red Skull", "Red Ghost"],
		correctAnswer: "Red Skull",
		image: "red-skull.jpg"
	},
	{
		question:"Who is this Iron Man villain?",
		answers: ["Mandarin", "Iron Monger", "Mole Man", "Baron Mordo"],
		correctAnswer: "Mandarin",
		image: "mandarin.jpg"
	},
	{
		question:"Who is this Fantastic Four villain?",
		answers: ["Punisher", "Puppet Master", "Dr.Doom", "Kylo Ren"],
		correctAnswer: "Dr.Doom",
		image: "dr-doom.jpg"
	}
];

var game = {
	timer: 30,
	correct: 0,
	incorrect: 0,
	currentQuestion: 0,
	unanswered: 0,
	countdown: function(){
		game.timer--;
		$("#timer").html(game.timer);
		if(game.timer<=0){
			console.log("time's up");
			timeUp();
		}
	}
};
$("#start").on("click",function(){
	$("#start").remove();
	displayQuestion();
})
$(document).on("click",".choices",function(e){
	clickedChoice(e);

})

$(document).on("click","#reset",function(){
	reset();
})

function displayQuestion () {
	timer = setInterval(game.countdown, 1000);
	$("#timer").css("display", "inline");
	$("#timer").html(30);
	$("#displayArea").html("<h2>"+trivia[game.currentQuestion].question+"</h2>");
	$("#image").html('<img src="images/'+trivia[game.currentQuestion].image+'" alt="villain">');
	for(i=0; i<trivia[game.currentQuestion].answers.length; i++) {
		$("#displayArea").append('<button class="choices" id="button-'+i+'" data-name="'+trivia[game.currentQuestion].answers[i]+'">'+trivia[game.currentQuestion].answers[i]+'</button>')
	}	
};

function clickedChoice(e) {
	clearInterval(timer);
	if($(e.target).data("name")==trivia[game.currentQuestion].correctAnswer){
		rightAnswer();
	}else {
		wrongAnswer();
	}
}

function rightAnswer() {
	clearInterval(timer);
	game.correct++;
	$("#displayArea").html("<h2>You Are Correct!</h2>");
	if(game.currentQuestion==trivia.length-1){
		setTimeout(results,2000);
	}else{
		setTimeout(nextQuestion,2000);
	}
	console.log("yay");
}

function wrongAnswer() {
	clearInterval(timer);
	game.incorrect++;
	$("#displayArea").html("<h2>Nope!</h2>");
	$("#displayArea").append("<h2>The Correct Answer Was: "+trivia[game.currentQuestion].correctAnswer+"</h2>");
	if(game.currentQuestion==trivia.length-1){
		setTimeout(results,2000);
	}else{
		setTimeout(nextQuestion,2000);
	}
	console.log("boo");
}

function timeUp() {
	clearInterval(timer);
	game.unanswered++;
	$("#timer").html("Time's Up");
	$("#displayArea").html("<h2>The Correct Answer Was: "+trivia[game.currentQuestion].correctAnswer+"</h2>");
	if(game.currentQuestion==trivia.length-1){
		setTimeout(results,3000);
	}else{
		setTimeout(nextQuestion,3000);
	}
}

function nextQuestion(){
	game.timer = 30;
	$("#timer").html(game.timer);
	game.currentQuestion++;
	displayQuestion();

}

function results(){
	clearInterval(timer);
	$("#image").empty();
	$("#displayArea").html("Quiz Completed");
	$("#displayArea").append("<h2>Correct: "+game.correct+"</h2>");
	$("#displayArea").append("<h2>Incorrect: "+game.incorrect+"</h2>");
	$("#displayArea").append("<h2>Unanswered: "+game.unanswered+"</h2>");
	$("#displayArea").append("<button id='reset'>Try Again</button>");

}

function reset(){
	game.currentQuestion = 0;
	game.timer = 30;
	game.correct = 0;
	game.incorrect = 0;
	game.unanswered = 0;
	displayQuestion();
}









