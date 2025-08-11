document.addEventListener("DOMContentLoaded", () => {
  const spec = localStorage.getItem("specialization");
  const diff = localStorage.getItem("difficulty");

  if (!spec || !diff) {
    alert("Missing quiz setup. Redirecting to home...");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("specializationDisplay").textContent = spec;
  document.getElementById("difficultyDisplay").textContent = diff;

  const roundDisplay = document.getElementById("roundDisplay");
  const questionDisplay = document.getElementById("questionDisplay");
  const userAnswerInput = document.getElementById("userAnswer");
  const timerDisplay = document.getElementById("timerDisplay");

  let currentRound = 1;
  const totalRounds = 10;
  let score = 0;
  let correctAnswer;
  let timer;
  let timeLeft = 15;

  function getRange(difficulty) {
      if (difficulty === "Easy") return [1, 10];
      if (difficulty === "Medium") return [10, 50];
      if (difficulty === "Hard") return [50, 100];
}

  function generateQuestion(specialization, difficulty) {
      const [min, max] = getRange(difficulty);
      const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
      const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

      if (specialization === "General") {
          const types = ["Addition", "Subtraction", "Multiplication", "Division"];
          const randomSpec = types[Math.floor(Math.random() * types.length)];
          return generateQuestion(randomSpec, difficulty);
      }

      switch (specialization) {
        case "Addition":
          return { question: `${num1} + ${num2}`, answer: num1 + num2 };
        case "Subtraction":
          return { question: `${num1} - ${num2}`, answer: num1 - num2 };
        case "Multiplication":
          return { question: `${num1} × ${num2}`, answer: num1 * num2 };
        case "Division":
          return {
            question: `${num1 * num2} ÷ ${num1}`,
            answer: num2,
          };
        default:
          console.error("Invalid specialization:", specialization);
          return { question: "Invalid Spec", answer: 0 };
      }
}


  function startTimer() {
      timeLeft = 15;
      timerDisplay.textContent = timeLeft;
      timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
          clearInterval(timer);
          skipQuestion();
        }
      }, 1000);
  }

  function skipQuestion() {
      currentRound++;
      if (currentRound > totalRounds) {
        endGame();
      } else {
        startRound();
      }
  }

  function startRound() {
      userAnswerInput.value = "";
      roundDisplay.textContent = `${currentRound}/${totalRounds}`;
      const { question, answer } = generateQuestion(spec, diff);
      questionDisplay.textContent = question;
      correctAnswer = answer;

      clearInterval(timer);
      startTimer();
  }

  function endGame() {
      clearInterval(timer);
      localStorage.setItem("quizScore", score);
      window.location.href = "result.html";
  }

  document.getElementById("submitBtn").addEventListener("click", () => {
    const userAnswer = parseFloat(userAnswerInput.value);
    if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
      score++;
    }

    clearInterval(timer);
    currentRound++;

    if (currentRound > totalRounds) {
      endGame();
    } else {
      startRound();
    }
  });

  document.getElementById("endGameOne").addEventListener("click", endGame);

  // Start the first round
  startRound();
});

