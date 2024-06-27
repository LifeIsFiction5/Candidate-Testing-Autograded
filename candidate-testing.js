const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
"Who was the first American woman in space?",
"True or false: 5 kilometer == 5000 meters?",
"(5 + 3)/2 * 10 = ?",
"Given the array ['8', 'orbit', 'Trajectory', '45'], what entry is at index 2?",
"What is the minimum crew size for the ISS?",
];

"Make an array of Q here on an index and store each answer in an array"; //Questions within array will have index value, as will answers. 
//comparing the two will be a function
let correctAnswers = [
"Sally Ride",
"true",
"40",
"Trajectory",
"3",
];

let candidateAnswers = [
"",
"",
"",
"",
"",
];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your first and last name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  candidateAnswer = input.question(`${question}`)

}

//!!input is an object.  Remember the '.' is an access modifier, and question is the method

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  //think of Candidateanwser and correctAnswer as a string.  They're a variable that is a string, so we may use string method on them.


if (candidateAnswer.toLowerCase() == correctAnswer.toLowerCase()) {
console.log("That's right!")
} else {
  console.log("Not quite!")
}

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  console.log("")
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};