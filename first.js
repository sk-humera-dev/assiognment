// Create an array named questions
const questions = [
  {
    category: "Science",
    question: "What is the boiling point of water?",
    choices: ["100°C", "50°C", "0°C"],
    answer: "100°C"
  },
  {
    category: "Maths",
    question: "What is 5 + 7?",
    choices: ["10", "12", "14"],
    answer: "12"
  },
  {
    category: "Geography",
    question: "What is the capital of India?",
    choices: ["Delhi", "Mumbai", "Hyderabad"],
    answer: "Delhi"
  },
  {
    category: "History",
    question: "Who is called the Father of the Nation in India?",
    choices: ["Jawaharlal Nehru", "Mahatma Gandhi", "APJ Abdul Kalam"],
    answer: "Mahatma Gandhi"
  },
  {
    category: "Computer",
    question: "Which one is a programming language?",
    choices: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript"
  }
];

// Function to get a random question
function getRandomQuestion(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to get random computer choice
function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get results
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);
console.log("Question:", question.question);
console.log("Choices:", question.choices);
console.log("Computer selected:", computerChoice);
console.log(getResults(question, computerChoice));

