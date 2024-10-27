// script.js

const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: 3,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const feedback = document.getElementById("feedback");
    feedback.innerText = "";
    const currentQuestion = questions[currentQuestionIndex];
  
    questionElement.innerText = currentQuestion.question;
    choicesContainer.innerHTML = "";
    
    currentQuestion.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.innerText = choice;
      button.onclick = () => checkAnswer(index);
      choicesContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const feedback = document.getElementById("feedback");
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedIndex === currentQuestion.correctAnswer) {
      score++;
      feedback.innerText = "Correct!";
      feedback.style.color = "green";
    } else {
      feedback.innerText = `Wrong! The correct answer was "${currentQuestion.choices[currentQuestion.correctAnswer]}".`;
      feedback.style.color = "red";
    }
    
    document.getElementById("next-btn").style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      document.getElementById("next-btn").style.display = "none";
    } else {
      displayResult();
    }
  }
  
  function displayResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
    document.getElementById("next-btn").style.display = "none";
  }
  
  // Initialize quiz on page load
  loadQuestion();
  