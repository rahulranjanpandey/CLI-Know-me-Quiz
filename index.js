var readlinesync = require("readline-sync");

var score = 0;
var username = readlinesync.question("What's your name ?");

console.log("Welcome" + " " + username + " " + "to Do you know Rahul ?");

function play (question, answer) {
  var useranswer = readlinesync.question(question);
    if (useranswer === answer) {
      console.log("right!");
      score = score + 1;
    } else {
      console.log("wrong!")
    }

    console.log("current score:", score);
    console.log("----------")
}

var questions = [{
  question: "Where do I live?",
  answer: "Delhi"
}, {
  question: "My favorite superhero would be?",
  answer: "Batman"
}, {
  question: "What is my Age?",
  answer: "30"
}
];

for (var i=0; i<questions.length; i++ ) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("WOW! Your Score is ", score);
