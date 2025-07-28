document.addEventListener('DOMContentLoaded', () => {
    const retry = document.getElementById('retry');
    const endGameTwo = document.getElementById('endGameTwo');
    const badge = document.getElementById('badge');
    const userScore = document.getElementById('user-score');
    const quizScore = localStorage.getItem('quizScore');

    retry.addEventListener('click', () => {
        window.location.href = '../game-page.html';
    })

    endGameTwo.addEventListener('click', () => {
        window.location.href = '../index.html';
    })

    userScore.textContent = quizScore;

    if(quizScore == 10) {
        badge.textContent = "Excellent";
        badge.style.color = "green";
    }
    else if (quizScore >= 7) {
        badge.textContent = "Very Good";
        badge.style.color = "green";
    }
    else if (quizScore >= 4) {
        badge.textContent = "Good";
        badge.style.color = "green";
    }
    else if (quizScore >= 1) {
        badge.textContent = "Fair";
        badge.style.color = "red";
    }
    else if (quizScore == 0) {
        badge.textContent = "Fail";
        badge.style.color = "red";
    }

});