const readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var highScores = [
  {
    name: "Sam",
    score: 5,
  },

  {
    name: "Trent",
    score: 2,
  }
];

var questions = [{
  question: "Which country won the first ever World Cup in 1930? \n",
  answer: "Uruguay"
}, 
{
  question: "Which club has won the most Champions League titles? \n",
  answer: "Real Madrid"
},
{
  question: "Which country has won the most World Cups? \n",
  answer: "Brazil"
},
{
  question: "The record number of World Cup goals is 16, scored by who? \n",
  answer: "Miroslav Klose"
},
{
  question: "Which team won the first Premier League title? \n",
  answer: "Manchester United"
}
];

function welcome() {
 var userName = readlineSync.question("What's your name? \n");

  console.log("Welcome "+ userName + " DO YOU KNOW about Football?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) { 
    console.log(chalk.green("Right!"));
    score = score + 1;
    
  } 
  else {
    console.log(chalk.red("Wrong!"));
   
  }

  console.log(chalk.blue("Current score: ", score));
  console.log("------------------")

  if (score === 3){
    console.log(chalk.bgGreen("Congrats! You got in level 2"));
  }
  else if (score === 5){
    console.log(chalk.bgGreen("Congrats! You got in level 3"));
  }
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  if (score > 0)
    console.log("YAY! You SCORED: ", score);
  else
    console.log("Sorry! You SCORED: ", score);

  console.log(chalk.bgCyan("---------------------------"));
  console.log(chalk.bgCyan("Check out the high scores!!"));
  console.log(chalk.bgCyan("---------------------------"));

  highScores.map(user => console.log(user.name, " : ", user.score));
}


welcome();
game();
showScores();
