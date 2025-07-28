# 🔢 QuinMath - Smart Math Quiz Game

**QuinMath** is a fun, interactive, and educational web-based Math Quiz App designed especially for young students to test and improve their math skills in a gamified way.

---

## 🚀 Features

- 🎯 Choose your **Specialization**:
  - General
  - Addition
  - Subtraction
  - Multiplication
  - Division

- 📈 Choose your **Difficulty Level**:
  - Easy
  - Medium
  - Hard

- ⏱️ Play through **10 timed rounds** per game
- 🔄 Get randomly generated math problems based on your selected specialization and difficulty
- 🧠 Answer **input-based** questions
- 🥇 View **Scores**, **High Score**, and earn **Level Badges**
- 🏆 See your **performance summary** at the end
- 📊 High Score Board to track your best results - **Not Active for now**

---

## 📂 Project Structure

```bash
QuinMath/
│
├── index.html           # Home page - choose specialization & difficulty
├── game-page.html       # Game page - play quiz, timer, score, rounds
├── result.html          # Result summary - view score and feedback
├── high-score.html      # High score board page
│
├── style.css            # Main styling for the app
│
├── scripts/
│   ├── index.js         # Handles form submission and navigation
│   ├── game.js          # Core game logic (question generation, timer, score)
│   └── result.js        # Logic for displaying results and storing high scores
│
└── README.md            # You are here!
