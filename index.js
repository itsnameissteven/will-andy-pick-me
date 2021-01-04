var answer = document.querySelector(".answer-btn");
var eightBallImage = document.querySelector(".eight-ball-image");
var printedQuestion = document.querySelector("#question");
var givenAnswer = document.querySelector("#answer");
var askedQuestion = document.querySelector(".question");
var clearButton = document.querySelector(".clear-btn");



answer.addEventListener('click', answerQuestion);
clearButton.addEventListener('click', clearPage)

function answerQuestion() {
    event.preventDefault();
    if (askedQuestion.value === "") {
        return
    }
    eightBallImage.style.display ='none';
    printedQuestion.innerText = '"' + askedQuestion.value + '?"';
    printedQuestion.style.display = "block";
    givenAnswer.innerText = pickRandomAnswer();
    givenAnswer.style.display = "block";
    clearButton.classList.add('clear-active')
    askedQuestion.value = ""
}

function clearPage() {
    if (givenAnswer.style.display !== "block") {
        event.preventDefault();
    }
}



var eightBallAnswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

function pickRandomAnswer() {
  var randomArrayIndex = Math.floor(Math.random()*eightBallAnswers.length);
  return eightBallAnswers[randomArrayIndex];
};