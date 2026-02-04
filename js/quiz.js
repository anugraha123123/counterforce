// Quiz for entertainment and information
const quizQuestions = [
    {
        question: "What is the Counter Force's main enemy in sci-fi lore?",
        options: ["Aliens from Zeta Reticuli", "Robots", "Time Travelers", "Ghosts"],
        answer: 0,
        fact: "In sci-fi, Zeta Reticuli is often linked to alien abductions!"
    },
    {
        question: "Which weapon does the Counter Force use against cosmic threats?",
        options: ["Laser Blaster", "Sword", "Magic Wand", "Boomerang"],
        answer: 0,
        fact: "Laser blasters are a staple in sci-fi for energy-based combat."
    },
    {
        question: "What powers the Counter Force's spaceships?",
        options: ["Warp Drives", "Gasoline", "Wind", "Pedals"],
        answer: 0,
        fact: "Warp drives allow faster-than-light travel in many sci-fi stories."
    },
    {
        question: "Who leads the Counter Force?",
        options: ["Captain Nova", "Dr. Evil", "Professor Chaos", "Agent Zero"],
        answer: 0,
        fact: "Leaders in sci-fi often have heroic, starry names like Nova."
    },
    {
        question: "What is a common sci-fi defense against invasions?",
        options: ["Force Fields", "Paper Walls", "Umbrellas", "Pillows"],
        answer: 0,
        fact: "Force fields are invisible barriers in sci-fi to protect against attacks."
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizQuestionsDiv = document.getElementById('quiz-questions');
    quizQuestionsDiv.innerHTML = '';

    if (currentQuestion < quizQuestions.length) {
        const q = quizQuestions[currentQuestion];
        const questionP = document.createElement('p');
        questionP.textContent = q.question;
        quizQuestionsDiv.appendChild(questionP);

        q.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(index);
            quizQuestionsDiv.appendChild(button);
        });
    } else {
        showResult();
    }
}

function checkAnswer(selected) {
    const q = quizQuestions[currentQuestion];
    if (selected === q.answer) {
        score++;
        alert('Correct! Fun Fact: ' + q.fact);
    } else {
        alert('Wrong! Fun Fact: ' + q.fact);
    }
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.textContent = `Your score: ${score} / ${quizQuestions.length}. Great sci-fi knowledge!`;
}

document.addEventListener('DOMContentLoaded', loadQuestion);