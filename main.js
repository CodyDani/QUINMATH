// Function called when 'Start quiz' button is clicked
function startQuiz() {
    // Storing Values for category specialization
    let category = document.getElementById('specialization');
    let categoryValue = category.value;

    // Storing Values for difficulty level
    let difficulty = document.getElementById('difficulty');
    let difficultyValue = difficulty.value;

    // Grabing RoundCount and timerCount && Initializing Round count and Timer
    const roundCount = document.getElementById('round');
    const timerCount = document.getElementById('timer');

    let round = 0;
    let timer = 0;

    // Grabing Displays of Specialization and Difficulty level
    const specializationDisplay = document.getElementById('specialization-display');
    const difficultyDisplay = document.getElementById('difficulty-display');

    // Grabing Questions
    const firstValue = document.getElementById('first');
    const operation = document.getElementById('cal');
    const secondValue = document.getElementById('second');

    // Store Value for Quiz Answers
    const quizAnswer = document.getElementById('user-input').value;

    // Submit Logic
    function quizSubmit() {

    }

    // Grabing Final Score value
    const finalScore = document.getElementById('user-score');
    
    // Grabing Badge element
    const badge = document.getElementById('badge');

    // End Game Instructions
    function endGameOne() {
        
    }

    function endGameTwo() {

    }

    // Retry Instruction
    function retry() {

    }

    // Easy level Questions
    function easyAddition() {

    }

    function easySubtraction() {

    }

    function easyMultiplication() {

    }

    function easyDivision() {

    }

    function easyGeneral() {
        
    }

    // Medium level Questions
    function mediumAddition() {

    }

    function mediumSubtraction() {

    }

    function mediumMultiplication() {

    }

    function mediumDivision() {

    }

    function mediumGeneral() {

    }

    // Hard level Questions
    function hardAddition() {

    }

    function hardSubtraction() {

    }

    function hardMultiplication() {

    }

    function hardDivision() {

    }

    function hardGeneral() {

    }

    if(difficultyValue === 'Easy') {
        if(categoryValue === 'Addition') {
            easyAddition();
        }
        if(categoryValue === 'Subtraction') {
            easySubtraction();
        }
        if(categoryValue === 'Multiplication') {
            easyMultiplication();
        }
        if(categoryValue === 'Division') {
            easyDivision();
        }
        if(categoryValue === 'General') {
            easyGeneral();
        }
    }


    if(difficultyValue === 'Medium') {
        if(categoryValue === 'Addition') {
            mediumAddition();
        }
        if(categoryValue === 'Subtraction') {
            mediumSubtraction();
        }
        if(categoryValue === 'Multiplication') {
            mediumMultiplication();
        }
        if(categoryValue === 'Division') {
            mediumDivision();
        }
        if(categoryValue === 'General') {
            mediumGeneral();
        }
    }


    if(difficultyValue === 'Hard') {
        if(categoryValue === 'Addition') {
            hardAddition();
        }
        if(categoryValue === 'Subtraction') {
            hardSubtraction();
        }
        if(categoryValue === 'Multiplication') {
            hardMultiplication();
        }
        if(categoryValue === 'Division') {
            hardDivision();
        }
        if(categoryValue === 'General') {
            hardGeneral();
        }
    }

}

