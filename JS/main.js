document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
    let categoryValue = document.getElementById('specialization').value;
    let difficultyValue = document.getElementById('difficulty').value;

    localStorage.setItem('specialization', categoryValue);
    localStorage.setItem('difficulty', difficultyValue);

    window.location.href = "game-page.html";
});
});