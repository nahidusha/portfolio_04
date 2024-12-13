// Array of 50 motivational quotes
const quotes = [
    "Indeed, with hardship comes ease. – Quran 94:6",
    "So truly where there is hardship, there is also ease. – Quran 94:5",
    "Do not grieve, indeed Allah is with us. – Quran 9:40",
    "And whoever fears Allah… He will make a way for him to get out (from every difficulty). – Quran 65:2",
    "Indeed, Allah is with those who fear Him and those who are doers of good. – Quran 16:128",
    "Your ally is none but Allah and His Messenger and those who have believed – those who establish prayer and give zakah, and they bow (in worship). – Quran 5:55",
    "Verily, Allah does not change the condition of a people until they change what is in themselves. – Quran 13:11",
    "And Allah is the best of planners. – Quran 3:54",
    "Indeed, Allah is over all things competent. – Quran 2:20",
    "Call upon Me, I will respond to you. – Quran 40:60",
    "So be patient. Indeed, the promise of Allah is truth. – Quran 30:60",
    "Indeed, Allah loves those who rely upon Him. – Quran 3:159",
    "O you who have believed, seek help through patience and prayer. – Quran 2:153",
    "Indeed, Allah is the best of planners. – Quran 8:30",
    "And He found you lost and guided [you]. – Quran 93:7",
    "Indeed, Allah does not burden a soul beyond that it can bear. – Quran 2:286",
    "So be patient. Indeed, the promise of Allah is truth. – Quran 30:60",
    "Indeed, with every difficulty, there is relief. – Quran 94:6",
    "And whoever fears Allah… He will make a way for him to get out (from every difficulty). – Quran 65:2",
    "Do not grieve, indeed Allah is with us. – Quran 9:40",
    "Verily, Allah does not change the condition of a people until they change what is in themselves. – Quran 13:11",
    "Indeed, Allah is with those who fear Him and those who are doers of good. – Quran 16:128",
    "Say, ‘My Lord, increase me in knowledge.’ – Quran 20:114",
    "Allah does not burden a soul beyond that it can bear. – Quran 2:286",
    "And He found you poor and made [you] self-sufficient. – Quran 93:8",
    "Indeed, Allah is over all things competent. – Quran 2:20",
    "Allah is the best of planners. – Quran 3:54",
    "Indeed, Allah is with those who fear Him. – Quran 16:128",
    "Be patient over what they say and avoid them with gracious avoidance. – Quran 73:10",
    "Do not despair of Allah’s mercy. – Quran 39:53",
    "Indeed, Allah loves those who are constant in patience. – Quran 3:146",
    "Your ally is none but Allah and His Messenger and those who have believed – those who establish prayer and give zakah, and they bow (in worship). – Quran 5:55",
    "Indeed, Allah is the best of helpers. – Quran 3:50",
    "And say, ‘My Lord, increase me in knowledge.’ – Quran 20:114",
    "Indeed, Allah is the best of planners. – Quran 8:30",
    "Indeed, with hardship comes ease. – Quran 94:6",
    "And He is the one who has created for you from the green trees fire, and then from it you ignite. – Quran 36:80",
    "Do not be sad. Allah is with us. – Quran 9:40",
    "Allah does not burden a soul beyond that it can bear. – Quran 2:286",
    "And He found you poor and made [you] self-sufficient. – Quran 93:8",
    "Indeed, Allah is the best of helpers. – Quran 3:50",
    "And whoever fears Allah… He will make a way for him to get out (from every difficulty). – Quran 65:2",
    "Indeed, the victory of Allah is near. – Quran 61:13",
    "So be patient. Indeed, the promise of Allah is truth. – Quran 30:60",
    "Indeed, Allah commands you to act justly and with excellence. – Quran 16:90",
    "Indeed, Allah loves those who rely upon Him. – Quran 3:159",
    "Say, ‘My Lord, increase me in knowledge.’ – Quran 20:114"
];

// Function to display two random quotes with a line break for reference
const generateQuoteButton = document.querySelector('#generate-quote');
const quoteDisplay1 = document.querySelector('#quote-display-1');
const quoteDisplay2 = document.querySelector('#quote-display-2');

generateQuoteButton.addEventListener('click', () => {
    // Generate two random quotes
    const randomQuote1 = quotes[Math.floor(Math.random() * quotes.length)];
    const randomQuote2 = quotes[Math.floor(Math.random() * quotes.length)];

    // Display the quotes with line breaks for references
    quoteDisplay1.innerHTML = randomQuote1.replace('–', '<br>–');
    quoteDisplay2.innerHTML = randomQuote2.replace('–', '<br>–');
});


document.addEventListener('DOMContentLoaded', (event) => {
    const expressionElement = document.getElementById('expression');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit-btn');
    const resultMessage = document.getElementById('result-message');
    const scoreElement = document.getElementById('score');
    const playAgainButton = document.getElementById('play-again-btn');
    const gameDiv = document.getElementById('game');
    const timerElement = document.getElementById('timer');
    const welcomeMessage = document.getElementById('welcome-message');
    const instruction = document.getElementById('instruction');

    let score = 0;
    let wrongAnswers = 0;
    let correctAnswer;
    let timer;
    let countdown;

    function generateExpression() {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const operators = ['+', '-', '*'];
        const operator = operators[Math.floor(Math.random() * operators.length)];
        return `${num1} ${operator} ${num2}`;
    }

    function startGame() {
        score = 0;
        wrongAnswers = 0;
        gameDiv.style.display = 'block';
        playAgainButton.style.display = 'none';
        nextExpression();
    }

    function nextExpression() {
        const exp = generateExpression();
        expressionElement.textContent = `Solve: ${exp}`;
        correctAnswer = eval(exp);
        answerInput.value = '';
        answerInput.focus();
        startTimer();
    }

    function startTimer() {
        clearInterval(countdown);
        let timeLeft = 6;
        timerElement.textContent = `Time left: ${timeLeft}s`;

        countdown = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time left: ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                resultMessage.textContent = "Time's up!";
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        clearInterval(countdown);
        resultMessage.textContent += " Game over.";
        scoreElement.textContent = `Your final score is: ${score}`;
        gameDiv.style.display = 'none';
        playAgainButton.style.display = 'block';
    }

    function handleSubmit() {
        const userAnswer = parseInt(answerInput.value);
        if (userAnswer === correctAnswer) {
            resultMessage.textContent = "Correct!";
            score++;
        } else {
            resultMessage.textContent = "Incorrect!";
            wrongAnswers++;
            if (wrongAnswers === 2) {
                endGame();
                return;
            }
        }
        nextExpression();
    }

    submitButton.addEventListener('click', handleSubmit);

    answerInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    });

    playAgainButton.addEventListener('click', startGame);

    welcomeMessage.style.display = 'block';
    instruction.style.display = 'block';
    playAgainButton.style.display = 'block';
});




