let currentIndex = 0;

function moveLeft() {
    const carouselImages = document.querySelector('.image-columnTWO');
    const imageWidth = carouselImages.clientWidth / 3; // Divide by 3 to match three images
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.children.length - 3; // Prevent moving beyond the first set
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function moveRight() {
    const carouselImages = document.querySelector('.image-columnTWO');
    const imageWidth = carouselImages.clientWidth / 3; // Divide by 3 to match three images
    currentIndex = (currentIndex < carouselImages.children.length - 3) ? currentIndex + 1 : 0; // Prevent moving beyond the last set
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

//redicionando para outra pagina by clicking 
function redirectTo(page) {
    window.location.href = page;
}

//QUIZ Billie lyrics
const quizData = [
    { question: "Finish the lyrics: 'So now, she's comin'up the stairs...'", options: ["Taste like she might be the one", "So I'm pullin'up a chair", "It's a craving, not a crush", "You need a seat? I'll volunteer"], answer: "So I'm pullin'up a chair" },
    { question: "Which song are these lyrics from? 'I wanna do bad things to you...'", options: ["Oxytocin", "Bad Guy", "Bury a Friend", "Happier Than Ever"], answer: "Oxytocin" },
    { question: "Finish the lyrics: 'Don't you know I'm no good for you...'", options: ["I've learned to lose, you can't afford to", "And now I'm better off alone", "But I still miss you every night", "I thought you knew that already"], answer: "I've learned to lose, you can't afford to" },
    { question: "Which song are these lyrics from? 'What do you want from me, why don't you run from me?'", options: ["Happier Than Ever", "Bury a Friend", "Bad Guy", "Everything I Wanted"], answer: "Bury a Friend" },
    { question: "Finish the lyrics: 'I can't tell you how much I wish I didn't wanna stay'", options: ["Don't ask questions", "I can't do this alone", "Why do I feel so cold?", "I just kinda wish you were gay"], answer: "I just kinda wish you were gay" },
    { question: "Which song are these lyrics from? 'You call me again, drunk in your Benz'", options: ["Your Power", "Male Fantasy", "Happier Than Ever", "Everything I Wanted"], answer: "Happier Than Ever" },
    { question: "Finish the lyrics: 'When you call my name'", options: ["We really need to talk", "Do you think I'll come runnin'", "You wouldn't know how much I hurt", "And I'd be happy on my own"], answer: "Do you think I'll come runnin" },
    { question: "Which song are these lyrics from? 'Can't you hear me? I'm not coming home'", options: ["Ocean Eyes", "I Love You", "Everything I Wanted", "Listen Before I Go"], answer: "Listen Before I Go" },
    { question: "Finish the lyrics: 'I'm in my bed, and you're not here...'", options: ["And there's no one to blame but the drink and my wandering hands", "And I miss you more than I thought I would", "Why does it feel like you're always near?", "This loneliness is too much to bear"], answer: "And there's no one to blame but the drink and my wandering hands" },
    { question: "Which song are these lyrics from? 'I had a dream, I got everything I wanted'", options: ["My Future", "Everything I Wanted", "Happier Than Ever", "No Time To Die"], answer: "Everything I Wanted" }
];

//currentQuestionIndex tracks which question we are on.
//score stores the number of correct answers.

let currentQuestionIndex = 0;
let score = 0;


function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    
    let optionsHtml = "";
    currentQuestion.options.forEach(option => {
        optionsHtml += `<button onclick=\"checkAnswer(this, '${option}')\">${option}</button><br>`;
    });
    document.getElementById("options").innerHTML = optionsHtml;
    document.getElementById("feedback").innerText = "";
}

function checkAnswer(button, answer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (answer === correctAnswer) {
        score++;
        button.style.backgroundColor = "green";
        document.getElementById("feedback").innerText = "Correct! 🎉";
    } else {
        button.style.backgroundColor = "red";
        document.getElementById("feedback").innerText = `Wrong! The correct answer was: ${correctAnswer}`;
    }
    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Completed! 🎉";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = `Your Score: ${score} / ${quizData.length}`;
        document.getElementById("restart").style.display = "block";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").innerText = "";
    document.getElementById("restart").style.display = "none";
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("restart").style.display = "none";
    loadQuestion();
});
